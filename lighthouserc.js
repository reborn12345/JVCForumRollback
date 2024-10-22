const fs = require('fs');

module.exports = {
  ci: {
    collect: {
      url: ['https://www.jeuxvideo.com/forums.htm'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--headless',
        postAudits: [
          {
            script: async (page) => {
              const scriptContent = fs.readFileSync('my-userscript.js', 'utf8');
              await page.evaluate(script => {
                const scriptEl = document.createElement('script');
                scriptEl.textContent = script;
                document.body.appendChild(scriptEl);
              }, scriptContent);
            },
          },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
