import string from "./css.js";
let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
console.log(n);

let time = 100;
const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  console.log(n + "" + string.substr(0, n));
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

const play = () => {
  return setInterval(run, time);
};
const pause = () => {
  window.clearInterval(id);
};
let id = play();

btnPause.onclick = () => {
  pause();
};

btnPlay.onclick = () => {
  id = play();
};

btnSlow.onclick = () => {
  window.clearInterval(id);
  time = 300;
  id = play();
};
btnNormal.onclick = () => {
  window.clearInterval(id);
  time = 100;
  id = play();
};
btnFast.onclick = () => {
  window.clearInterval(id);
  time = 0;
  id = play();
};
