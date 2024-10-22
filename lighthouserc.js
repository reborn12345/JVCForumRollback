module.exports = {
  ci: {
    collect: {
      url: ['https://www.jeuxvideo.com/forums.htm'],  // Change l'URL par celle que tu veux tester
      numberOfRuns: 3,
      // Ajoute une étape avant l'audit
      settings: {
        emulatedFormFactor: 'desktop',
        preAudits: [
          {
            // Un script pour accepter les cookies
            script: `
              document.querySelector('button.accepter-cookies').click();
            `,
          },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
