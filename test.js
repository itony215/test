const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://bld.2tvnow.com');
  let i = 0
  // 等待按鈕出現
  await page.waitForSelector("input[aria-label='Account']");
  await console.log('11')
  await page.type("input[aria-label='Account']", 'test');
  await console.log('12')
  await page.type("input[aria-label='Password']", '123');
  await page.click("button[class='btn btn--block secondary']");
  await console.log('13')
  // 點擊
  for (var j = 0; j < 1322; j++) {
    //await page.waitForNavigation({
    //  waitUntil: 'networkidle0',
    //});
    await page.waitFor(7000)
    //await page.waitFor('*')
    //await page.goto('http://bld.2tvnow.com', { "waitUntil": "networkidle2" });
    await page.screenshot({ path: 'example' + i + '.png' });
    //const divsCounts = await page.$$eval('.material-icons', divs => divs.map(_ => _.innerText).filter(text => text === 'arrow_right').click())
    //await page.click(document.querySelector("#app > div.application--wrap > main > div > div > header > nav > div > div:nth-child(4) > button:nth-child(3) > div > i"))
    await page.$eval("#app > div.application--wrap > main > div > div > header > nav > div > div:nth-child(4) > button:nth-child(3) > div > i", el => el.click());
    console.log('iii', i)
    i++
  }

  // await page.$$eval('.material-icons', elements => {
  //   elements[1].click()
  // });

  //divsCounts.click();
  //console.log('divsCounts', divsCounts)
  //await page.click(divsCounts);
  //await page.click(Array.from(document.querySelectorAll('.material-icons')).map(_ => _.innerText).filter(text => text === 'arrow_right'));
  await console.log('15')
  //await browser.close();
})();