/**
 * The actual worker dude.
 * Wraps a utility object in such a way that messaging between workers uses a
 * standard communication protocol.
 *
 * @param util {object} An object with methods to be run that are slow.
 * @return util with listeners bound.
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

  return util;
};

module.exports = bindUtility;
