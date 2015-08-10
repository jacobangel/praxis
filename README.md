# Praxis

A method for writing webworker respects like they were normal things.

```js
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

## Build

Build is done using webpack.

```sh
npm install # install all modules
npm run build # build pertinent files
npm run test # run mocha tests
```
This run on webpack-dev-server. Start it as so:

```sh
npm run serve
```
