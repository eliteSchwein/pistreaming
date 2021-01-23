# Pi Video Streaming Demo Pi4 Version

This is a demonstration for low latency streaming of the Pi's camera module to
any reasonably modern web browser, utilizing Dominic Szablewski's excellent
[JSMPEG project](https://github.com/phoboslab/jsmpeg). Other dependencies are
the Python [ws4py library](http://ws4py.readthedocs.org/), my [picamera
library](http://picamera.readthedocs.org/) (specifically version 1.7 or above),
and [FFmpeg](http://ffmpeg.org).


## Installation

Firstly make sure you've got a functioning Pi camera module (test it with
`raspistill` to be certain). 


Then make sure you've got the following packages installed:

    $ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    $ sudo bash nodesource_setup.sh
    $ sudo apt install nodejs

Next, clone this repository:

    $ git clone https://github.com/eliteSchwein/pistreaming.git

Then install all node Modules:

    $ cd pistreaming
    $ cd npm i


## Usage

Run the Python server script which should print out a load of stuff
to the console as it starts up:

    $ cd pistreaming
    $ npm i

Now fire up your favourite web-browser and visit the address
`http://pi-address:8080/` - you should now see the Demo and Configurator Website, in there you get the direct URLs to the Stream and Snapshots.

## Credit, sources and inspiration

* [Vue.js](https://vuejs.org/): The Progressive JavaScript Framework
* [Vuetify](https://vuetifyjs.com/): Material Design Component Framework for Vue.js
* [Flaticon](https://www.flaticon.com): for the Logo and some Icons
