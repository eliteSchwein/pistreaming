const { Flip,StreamCamera, Codec } = require("pi-camera-connect");
const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

const width= 1280;
const height= 720;
const flip = Flip.None;
const rotation = 0;
const framerate = 30;
const bitRate = 20000000

const webserverport = 8080;

var stream = "";
var currentFrame = ""

const streamCamera = new StreamCamera({
    width:this.width,
    height:this.height,
    rotation:this.rotation,
    flip:this.flip,
    fps:framerate,
    bitRate:this.bitRate,
    codec:Codec.MJPEG
});

stream=streamCamera.createStream();

async function startStream(){
    console.log("start stream")
    await streamCamera.startCapture()
}

startStream()

stream.on("data", async function(data){
    currentFrame = await streamCamera.takeImage()
})

app.listen(webserverport, () => {
    console.log(`Started listening on port `+webserverport);
});

app.get('/', function (req, res) {
	res.type("application/json");
	res.send('{"status":"ok"}');
});

app.get('/snapshot', async function (req, res) {
    const image = await streamCamera.takeImage()
	res.type("image/jpeg");
	res.send(image);
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
        setTimeout(send_next,framerate)
    };
    send_next();
});