# Praxis

A method for writing webworker respects like they were normal things.

```
// Worker Helper
import praxis from 'praxis';
import workerHelper from 'helper';

const getThing = () => {

  praxis(workerHelper)
    .call('method')
    .then((resp) => {

    }).
    .catch((resp) => {

    });
}

module.exports = {
  getThing
}
```

## Action Dispatch Between Workers


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
