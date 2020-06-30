const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://bld.2tvnow.com');
  
  // 等待訂閱按鈕出現
  await page.waitForSelector("input[aria-label='Account']");
  await console.log('11')
  await page.type("input[aria-label='Account']", 'test');
  await console.log('12')
  await page.type("input[aria-label='Password']", '123');
  // 點擊
  await page.click("button[class='btn btn--block secondary']");
  await console.log('13')
  await page.goto('http://bld.2tvnow.com', { "waitUntil": "networkidle2" });
  await console.log('14')
  await page.screenshot({ path: 'example.png' });
  //const divsCounts = await page.$$eval('.material-icons', divs => divs.map(_ => _.innerText).filter(text => text === 'arrow_right').click())
  //await page.click(document.querySelector("#app > div.application--wrap > main > div > div > header > nav > div > div:nth-child(4) > button:nth-child(3) > div > i"))
  await page.$eval("#app > div.application--wrap > main > div > div > header > nav > div > div:nth-child(4) > button:nth-child(3) > div > i", el => el.click());
  await page.$$eval('.material-icons', elements => {
    elements[1].click()
  });
  
  //divsCounts.click();
  //console.log('divsCounts', divsCounts)
  //await page.click(divsCounts);
  //await page.click(Array.from(document.querySelectorAll('.material-icons')).map(_ => _.innerText).filter(text => text === 'arrow_right'));
  await console.log('15')
  //await browser.close();
})();