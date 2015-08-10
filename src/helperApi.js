import Praxis from './praxis';

const worker = require('worker!./worker.js');

const getThing = () => {

  const th = (new Praxis(worker));
  return th.invoke('random')
    .then((resp) => {
      console.log('the response', resp);
    }).catch((resp) => {
      console.log('the error', resp);
    });
};

module.exports = {
  getThing,
};
