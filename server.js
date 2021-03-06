const { Flip,StreamCamera, Codec, Rotation, ExposureMode, AwbMode } = require("pi-camera-connect");
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path');
const app = express();

var config = require('./config.json');

app.use(cors())
app.use(bodyParser())

const webserverport = config.port;

var stream = "";
var currentFrame = ""

var streamCamera = new StreamCamera({
    width:config.width,
    height:config.height,
    rotation:Rotation["Rotate"+config.rotation],
    flip:Flip[config.flip],
    fps:config.framerate,
    bitRate:config.bitrate,
    sharpness:config.sharpness,
    contrast:config.contrast,
    brightness:config.brightness,
    saturation:config.saturation,
    iso:config.iso,
    exposureCompensation:config.exposureCompensation,
    exposureMode:ExposureMode[config.exposureMode],
    awbMode:AwbMode[config.awbMode],
    codec:Codec.MJPEG
});

stream=streamCamera.createStream();

async function startStream(){
    console.log("start stream")
    await streamCamera.startCapture()
}

startStream()

var frameHandler = stream.on("data", async function(data){
    currentFrame = await streamCamera.takeImage()
})

app.listen(webserverport, () => {
    console.log(`Started listening on port `+webserverport);
});

app.use(express.static(__dirname + '/frontend/dist'));

app.get('/getconfig', function (req, res) {
	res.type("application/json");
	res.send(config);
});

if(!config.readonly){
    app.post('/setconfig', function (req, res) {
        var newConfig = JSON.stringify(req.body,null,2)
        fs.writeFile('./config.json',newConfig,async function(err){
            if (err) throw err;
            console.log('Saved new Config!');
            console.log("Restart Stream!");
            await restartStream()
            res.type("application/json");
            res.send('{"status":"ok"}');
        })
    });
}

app.get('/snapshot', async function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'Content-Type: image/jpeg',
        'Content-Length': currentFrame.length
    });
	res.end(currentFrame);
});

app.get('/stream', async function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'multipart/x-mixed-replace; boundary=myboundary',
        'Cache-Control': 'no-cache',
        'Connection': 'close',
        'Pragma': 'no-cache'
    });

    var stop = false;

    res.connection.on('close', function() { stop = true; });
    var send_next = function(){
        if (stop)
            return;
        res.write("--myboundary\r\n");
        res.write("Content-Type: image/jpeg\r\n");
        res.write("Content-Length: " + currentFrame.length + "\r\n");
        res.write("\r\n");
        res.write(currentFrame,'binary');
        res.write("\r\n");
        setTimeout(send_next,config.framerate)
    };
    send_next();
});

app.use(function(req, res, next) {
    res.status(404);
    res.redirect("/");
});

async function restartStream(){
    var filename = path.resolve("./config.json");
    delete require.cache[filename];
    config = require('./config.json');
    await streamCamera.stopCapture();
    streamCamera = new StreamCamera({
        width:config.width,
        height:config.height,
        rotation:Rotation["Rotate"+config.rotation],
        flip:Flip[config.flip],
        fps:config.framerate,
        bitRate:config.bitrate,
        sharpness:config.sharpness,
        contrast:config.contrast,
        brightness:config.brightness,
        saturation:config.saturation,
        iso:config.iso,
        exposureCompensation:config.exposureCompensation,
        exposureMode:ExposureMode[config.exposureMode],
        awbMode:AwbMode[config.awbMode],
        codec:Codec.MJPEG
    });
    
    stream=streamCamera.createStream();
    frameHandler = stream.on("data", async function(data){
        currentFrame = await streamCamera.takeImage()
    })
    await streamCamera.startCapture();
}