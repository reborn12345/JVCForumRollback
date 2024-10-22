const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.jeuxvideo.com/forums.htm');

  // Attendre et cliquer sur le bouton d'acceptation des cookies
  const buttonSelector = '.jad_cmp_paywall_button-cookies';
  await page.waitForSelector(buttonSelector, { timeout: 5000 });
  await page.click(buttonSelector);

  // Lancer Lighthouse sur la même page après avoir accepté les cookies
  // Remplace le chemin d'accès à Lighthouse ci-dessous si nécessaire
  await page.evaluate(() => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/lighthouse/lighthouse-core/runner.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  });

  // Fermer le navigateur
  await browser.close();
})();
