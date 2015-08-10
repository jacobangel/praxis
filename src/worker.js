/**
 * The actual worker dude.
 */
const util = {
  random() {
    const then = Date.now();
    setTimeout(() => {
      postMessage({
        time: Date.now() - then,
      });
    }, (Math.random() * 1000));
  }
}
const route = (e) => {
  try {
    util[e.method].call(util, e.args);
  } catch (err) {
    console.warn('error:', err);
  }
};

onmessage = (e) => route(e.data);
