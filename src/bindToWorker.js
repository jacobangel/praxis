/**
 * The actual worker dude.
 */
const bindUtility = (util) => {
  const route = (e) => {
    try {
      util[e.method].call(util, e.args);
    } catch (err) {
      console.warn('error:', err);
    }
  };

  onmessage = (e) => route(e.data);
};

module.exports = bindUtility;
