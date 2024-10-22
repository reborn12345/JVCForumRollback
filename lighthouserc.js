
const { exec } = require('child_process');

module.exports = {
  ci: {
    collect: {
      url: ['https://www.jeuxvideo.com/forums.htm'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--headless',
        // Configure ici pour utiliser le script d'acceptation des cookies
        postAudits: [
          {
            script: 'node accept-cookies.js', // Appeler le script d'acceptation des cookies
          },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
