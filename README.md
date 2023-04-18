# browser-records-audio
Node.js script using puppeteer to download an audio stream from a web page

This is in state "kind of worked for me" right now.

## Install

Tested on Ubuntu 20.04 LTS

Install xvfb:

    sudo apt install xvfb
    
Run ```node install``` on the repository.

## Usage

The script takes three command line parameters:

 -u, --url : what pages to record from
 
 -c, --selector : what element to click at to start the sound
 
 -t, --duration : how long to record for in seconds

The resulting file with sound and some kind of video will be in ```test.webm``` .
