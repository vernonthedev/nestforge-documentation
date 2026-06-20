const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:4321/');

  await page.waitForSelector('.explore');

  const section = await page.$('.explore');
  await section.screenshot({ path: 'verification/screenshots/redesign_final.png' });

  const link = await page.$('.direct-links a');
  if (link) {
    await link.hover();
    await new Promise(r => setTimeout(r, 500));
    await section.screenshot({ path: 'verification/screenshots/redesign_hover.png' });
  }

  await page.setViewportSize({ width: 375, height: 800 });
  await new Promise(r => setTimeout(r, 500));
  await section.screenshot({ path: 'verification/screenshots/redesign_mobile.png' });

  await browser.close();
})();
