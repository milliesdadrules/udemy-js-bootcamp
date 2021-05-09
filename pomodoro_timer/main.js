// Get Button elements
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');

// Get Work minutes & seconds elements
const wm = document.getElementById('w-minutes');
const ws = document.getElementById('w-seconds');

// Get Break minutes & seconds elements
const bm = document.getElementById('b-minutes');
const bs = document.getElementById('b-seconds');

// Ref to a timer variable
let startTimer;

const timer = () => {
  if (ws.innerHTML != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0) {
    wm.innerText--;
  }
};
