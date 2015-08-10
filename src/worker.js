/**
 * The actual worker dude.
 */
const route = (e) => {
  switch (e.method) {
    case 'random':
    setTimeout(() => {
      postMessage({
        time: Date.now(),
      });
    }, (Math.random() * 100));
    break;

    default :
    console.log('newp');
  }
};

onmessage = (e) => route(e.data);
