# Pi Streaming

This is a high configurable and easy to use PI Cam MJPEG Streamer, with a pretty new Webinterface.
You can configure it via the Webinterface aswell and it will autorestart!


## Installation

Firstly make sure you've got a functioning Pi camera module (test it with
`raspistill` to be certain). 

Install Git first

    $ sudo apt install git


For the ARM V7 Pi's (Pi3 and higher) install Node via:

    $ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    $ sudo bash nodesource_setup.sh
    $ sudo apt install nodejs
    
For the older Pi's use :

    $ wget https://nodejs.org/download/release/v11.15.0/node-v11.15.0-linux-armv6l.tar.gz
    $ tar -xvf node-v11.15.0-linux-armv6l.tar.gz
    $ cd node-v11.15.0-linux-armv6l
    $ sudo cp -R * /usr/local/

Next, clone this repository:

    $ git clone https://github.com/eliteSchwein/pistreaming.git

Then install all node Modules:

    $ cd pistreaming
    $ cd npm i


## Usage

Start the pistreaming server:

    $ cd pistreaming
    $ npm start

Now fire up your favourite web-browser and visit the address
`http://pi-address:8080/` - you should now see the Demo and Configurator Website, in there you get the direct URLs to the Stream and Snapshots.

## Credit, sources and inspiration

* [Vue.js](https://vuejs.org/): The Progressive JavaScript Framework
* [Vuetify](https://vuetifyjs.com/): Material Design Component Framework for Vue.js
* [Flaticon](https://www.flaticon.com): for the Logo and some Icons
