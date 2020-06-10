const functions = require('firebase-functions');
const puppeteer = require('puppeteer')

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '1GB'
  }
exports.helloWorld = functions
.runWith(runtimeOpts)
.https.onRequest(async(req, res) => {
  const url = "https://wwww.ahmedghoul.com";

  const browser = await puppeteer.launch({
      args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(url);
  res.send(await page.title());
  await browser.close();
});
