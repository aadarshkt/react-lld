//Idea - You run your api call every interval.
// Next interval can only scheduled if it is greater than the required delay.
//Something similar to leetcode submit.

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

const log = throttle((msg) => console.log(msg), 1000);

setInterval(() => log("Api calling"), 200);
