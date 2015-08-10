# Flux Workers

I'm sure this is already a thing. I'm just tooling around in public, which means
some of this is likely very naive.

## Action Dispatch Between Workers

Distribute the work automatically by passing the action through a worker. It's
extremely similiar to a techniqued used in [flux-mirror](https://github.com/pstoica/flux-mirror).

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

## Alternatives

Promise Based solution for web-workers is probably a smarter approach?

```
// utils/ActionWorker.js
const worker = require('worker!./Api')
// wrap worker into promis
// use like an axios style or fetch.

const workios =-promisifiedWorker(worker).doAction()...

```

```
LaggyThing.getPrime().then(this.dispatch());
```
