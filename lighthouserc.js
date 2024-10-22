module.exports = {
  ci: {
    collect: {
      url: ['https://www.jeuxvideo.com/forums.htm'],
      numberOfRuns: 3,
      settings: {
        preAudits: [
          {
            script: `
              // Ton code de userscript ici
              console.log('Userscript injecté et exécuté');
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
