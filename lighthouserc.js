module.exports = {
  ci: {
    collect: {
      url: ['https://www.jeuxvideo.com/forums.htm'],  // Change l'URL par celle que tu veux tester
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
