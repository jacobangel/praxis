/**
 * Base Praxis Constructor.
 */
class Praxis {
  constructor (workerClass) {
    this.worker = new workerClass();
  }

  invoke(methodName, ...args) {
    return new Promise((resolve, reject) => {
      this.worker.onmessage = (e) => {
        console.log('getting message from worker');
        resolve(e.data);
      };

      this.worker.onerror = (e) => {
        reject(e.data);
      };

      this.worker.postMessage({
        method: methodName,
        args,
      });
    });
  }
}

module.exports = Praxis;
