module.exports = {
  ci: {
    collect: {
      url: ['https://www.jeuxvideo.com/forums.htm'],  // Change l'URL par celle que tu veux tester
      numberOfRuns: 3,
      // Ajoute une étape avant l'audit
      settings: {
        // Configurer les actions à exécuter avant l'audit
        preAudits: [
          {
            script: `
              const buttonSelector = '.jad_cmp_paywall_button-cookies';
              document.querySelector(buttonSelector)?.click();
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
