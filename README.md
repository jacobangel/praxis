# Praxis

A method for writing webworker respects like they were normal things.

```
// Worker Helper
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

```

## build

Build is done using webpack.

```sh
npm install && npm run build
```

## testing

This run on webpack-dev-server. Start it as so:

```sh
npm run serve
```
