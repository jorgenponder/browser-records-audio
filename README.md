# browser-records-audio
Node.js script using puppeteer to download an audio stream from a web page

This is in state "kind of worked for me" right now.

## Install

Tested on Ubuntu 20.04 LTS

Install xvfb:

    sudo apt install xvfb
    
Run ```node install``` on the repository.

Edit the js file with your url, your interface element to start the playing, and your duration of recording.

The resulting file with sound and some kind of video will be in ```test.webm``` .
