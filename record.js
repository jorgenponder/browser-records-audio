const { launch, getStream } = require("puppeteer-stream");
const fs = require("fs");
const Xvfb = require('xvfb');
const file = fs.createWriteStream(__dirname + "/test.webm");
const {executablePath} = require('puppeteer');
const { program } = require('commander');


program
  .requiredOption('-u, --url <char>')
  .requiredOption('-c, --selector <char>')
  .requiredOption('-t, --duration <number>');
program.parse();
const options = program.opts()

async function test() {

    var xvfb = new Xvfb({
        silent: true,
        xvfb_args: ["-screen", "0", '1280x720x24', "-ac"],
    });
    xvfb.start((err)=>{if (err) console.error(err)})

        const browser = await launch({
                defaultViewport: {
                        width: 1920,
                        height: 1080,
                },
 executablePath: executablePath(),
        });

        const page = await browser.newPage();
        await page.goto(options.url);
        await page.click(options.selector)
        const stream = await getStream(page, { audio: true, video: true });
        console.log("recording");

        stream.pipe(file);
        setTimeout(async () => {
                await stream.destroy();
                file.close();
                console.log("finished");
        }, 1000 * options.duration);
}

test();
