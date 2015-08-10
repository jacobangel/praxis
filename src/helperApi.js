const Praxis = require('./praxis');
const randomWorker = require('worker!./random.js');

const getThing = () => {
  return (new Praxis(randomWorker))
    .invoke('random')
    .then((resp) => {
      console.log('the response', resp);
    }).catch((resp) => {
      console.log('the error', resp);
    });
};

module.exports = {
  getThing,
};
