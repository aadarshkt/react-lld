const controller1 = new AbortController();

fetch("https://api.example.com/data", { signal: controller1.signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === "AbortError") {
      console.log("Request cancelled");
    }
  });

// Cancel the previous request: // Don't why previous will be cancelled.
controller1.abort();


//More beautiful and correct code.
let controller;

function search(query) {
  if (controller) {
    controller.abort();   // abort previous fetch
  }

  controller = new AbortController();
  const signal = controller.signal;

  fetch(`/search?q=${query}`, { signal })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err.name === "AbortError") {
        console.log("Previous request aborted");
      }
    });
}