/**
 * Base Praxis Constructor.
 */
class Praxis {
  constructor (WorkerClass) {
    this.worker = new WorkerClass();
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
