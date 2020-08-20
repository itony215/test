const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      // 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://bld.2tvnow.com');
  let i = 1
  // 等待按鈕出現
  await page.waitForSelector("input[aria-label='Account']");
  await console.log('input account')
  await page.type("input[aria-label='Account']", 'hc-chen');
  await console.log('type password')
  await page.type("input[aria-label='Password']", 'hc12321');
  await page.click("button[class='btn btn--block secondary']");
  await console.log('login success')
  // 點擊
  while(i>0){

    await console.log('init screen')

    await page.waitFor(10000 + Math.random() * 10000)

    await page.$eval("#app > div.application--wrap > main > div > div > header > nav > div > div:nth-child(5) > button > div", el => el.click());

    
    await page.waitFor(5000)
    await page.screenshot({ path: 'save' + i + '.png' });

    const option = await page.$eval("div.layout.row.justify-center > button:nth-child(2) > div", el => el.click()
    );
    await page.waitFor(10000)
    console.log('save image: ', i)
    
    await page.screenshot({ path: 'case' + i + '.png' });
    i++

  }
  //await browser.close();
})();