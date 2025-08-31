//debounce clears previous setTimeouts before initiating next Timeout.
//first call will add to macrotask queue and next will remove it.

function debounce(fn, delay) {
  //closure should be used otherwise new variable instance will be created.
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
}

async function apiCall() {
  console.log("This calls the api");
}

const call = debounce(apiCall, 300);

call();
call();
call();
call();
call();

