const bindToWorker = require('./bindToWorker');

const util = {
  random() {
    const then = Date.now();
    setTimeout(() => {
      postMessage({
        time: Date.now() - then,
      });
    }, (Math.random() * 1000));
  },
};
module.exports = bindToWorker(util);
