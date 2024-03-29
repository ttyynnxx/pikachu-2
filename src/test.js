
const string = `.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}

.skin {
  background-color: #ffe600;
  min-height: 50vh;
  position: relative;
}
.nose {
  position: relative;
  border: 10px solid #000;
  border-color: #000 transparent transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: wave 200ms infinite linear;
}
.yuan {
  position: absolute;
  border: 1px solid #000;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background-color: #000;
}

.eyes {
  position: absolute;
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-radius: 50%;
}
.eyes::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 4px;
}
.eyes.left {
  transform: translateX(-100px);
}
.eyes.right {
  transform: translateX(100px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid #000;
  width: 100px;
  height: 30px;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  background-color: #ffe600;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0px;
  background-color: #ffe600;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right::before {
  left: -6px;
}
.mouth .down {
  height: 180px;
  width: 100%;
  position: absolute;
  top: 5px;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid #000;
  height: 1000px;
  width: 150px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background-color: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  border: 1px solid red;
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  background-color: #ff485f;
  border-radius: 100px;
}
.face {
  border: 3px solid #000;
  width: 88px;
  height: 88px;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -44px;
  z-index: 3;
}
.face > img {
  position: absolute;
  left: 50%;
  top: 50%;
}
.face.left {
  transform: translateX(-180px);
  background-color: #ff0000;
  border-radius: 50%;
}
.face.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.face.right {
  transform: translateX(180px);
  background-color: #ff0000;
  border-radius: 50%;
}
`;

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
