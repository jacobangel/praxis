const Praxis = require('./praxis');
const worker = require('worker!./worker.js');

const getThing = () => {
  return (new Praxis(worker))
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
