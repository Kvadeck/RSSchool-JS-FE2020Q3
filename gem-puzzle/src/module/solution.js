/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */

import render from './render';
import timer from './timer';
import helper from './helper';

const helperStarter = helper();
const renderNew = render();
const timerNew = timer();

export default function () {
  const scoreTime = document.getElementById('scoreTime');
  const scoreSteps = document.getElementById('scoreSteps');
  const scoreField = document.getElementById('scoreField');

  const steps = document.getElementById('steps');
  const timerEl = document.getElementById('timer');

  const checkAreaName = function checkAreaName() {
    let areaName;
    const areaSize = localStorage.getItem('savedAreaSize');

    if (!areaSize) {
      areaName = 'four';
    } else {
      const areaSizeArr = areaSize.split(',');
      const name = areaSizeArr[1];
      areaName = (!name) ? 'four' : name;
    }
    return areaName;
  };

  const fieldSolution = function fieldSolution(fieldLen) {
    return Array.from({ length: fieldLen }, (_, i) => i + 1).join(',');
  };

  const pasteScoreToWin = function pasteScoreToWin() {
    scoreTime.innerText = timerEl.innerText;
    scoreSteps.innerText = steps.innerText;
    scoreField.innerText = checkAreaName();
  };
  const saveWin = function saveWin() {
    const STORAGESIZE = 10;

    const score = localStorage.getItem('score');
    const gamesArr = [];

    const currGame = function currGame() {
      return {
        time: scoreTime.innerText,
        steps: scoreSteps.innerText,
        field: checkAreaName(),
      };
    };

    if (!score) {
      gamesArr.push(currGame());
      localStorage.setItem('score', JSON.stringify(gamesArr));
    }
    const scoreArr = JSON.parse(score);

    const convert = helperStarter.convertToSeconds;

    if (scoreArr.length >= STORAGESIZE) { scoreArr.shift(); }

    scoreArr.push(currGame());

    const sortedScoreArr = scoreArr
      .sort((a, b) => parseFloat(convert(a.time)) - parseFloat(convert(b.time)));

    localStorage.setItem('score', JSON.stringify(sortedScoreArr));
  };

  const winAnimation = function winAnimation() {
    let canvas;
    let draw;
    let mouseX;
    let mouseY;
    let mouseVX;
    let mouseVY;
    let update;

    const min = 1;
    const max = 8;
    const particles = 200;
    const colors = ['64, 32, 0', '250, 64, 0', '64, 0, 0', '200, 200, 200'];

    const rand = function rand(a, b) {
      return Math.random() * (b - a) + a;
    };

    // eslint-disable-next-line func-names
    const Particle = (function () {
      // eslint-disable-next-line no-shadow
      function Particle() {
        this.reset();
      }

      Particle.prototype.reset = function particleReset() {
        // eslint-disable-next-line no-bitwise
        this.color = colors[~~(Math.random() * colors.length)];
        this.radius = rand(min, max);
        this.x = rand(0, canvas.width);
        this.y = rand(-20, canvas.height * 0.5);
        this.vx = -5 + Math.random() * 10;
        this.vy = 0.7 * this.radius;
        this.valpha = rand(0.02, 0.09);
        this.opacity = 0;
        this.life = 0;
        this.onupdate = undefined;
        this.type = 'dust';
      };

      Particle.prototype.update = function particleUpdate() {
        this.x += this.vx / 3;
        this.y += this.vy / 3;

        if (this.opacity >= 1 && this.valpha > 0) this.valpha *= -1;
        this.opacity += this.valpha / 3;
        this.life += this.valpha / 3;

        if (this.type === 'dust') this.opacity = Math.min(1, Math.max(0, this.opacity));
        else this.opacity = 1;

        if (this.onupdate) this.onupdate();
        if (this.life < 0 || this.radius <= 0 || this.y > canvas.height) {
          this.onupdate = undefined;
          this.reset();
        }
      };

      Particle.prototype.draw = function particleDraw(c) {
        // eslint-disable-next-line no-param-reassign
        c.strokeStyle = `rgba(${this.color}, ${Math.min(this.opacity, 0.85)})`;
        // eslint-disable-next-line no-param-reassign
        c.fillStyle = `rgba(${this.color}, ${Math.min(this.opacity, 0.65)})`;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
        c.fill();
        c.stroke();
      };

      return Particle;
    }());

    // eslint-disable-next-line no-multi-assign
    mouseVX = mouseVY = mouseX = mouseY = 0;

    canvas = document.getElementById('surprise');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawables = (function drawables() {
      let _i = 1;
      let _results;
      // eslint-disable-next-line no-unused-vars
      let i = 1;
      _results = [];
      for (; _i <= particles; i = ++_i) {
        _results.push(new Particle());
      }
      return _results;
    }());

    draw = function drawName() {
      let d; let _i; let
        _len;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (_i = 0, _len = drawables.length; _i < _len; _i++) {
        d = drawables[_i];
        d.draw(context);
      }
    };

    update = function updateFn() {
      let d; let _i; let _len; let
        _results;
      _results = [];
      for (_i = 0, _len = drawables.length; _i < _len; _i++) {
        d = drawables[_i];
        _results.push(d.update());
      }
      return _results;
    };

    document.onmousemove = function onmouseMove(e) {
      mouseVX = mouseX;
      mouseVY = mouseY;
      mouseX = Math.floor(e.pageX);
      mouseY = Math.floor(e.pageY);
      mouseVX = Math.floor(((mouseVX - mouseX) / 2));
      mouseVY = Math.floor(((mouseVY - mouseY) / 2));
    };

    window.addEventListener('resize', draw, false);
    setInterval(draw, 1000 / 30);
    setInterval(update, 1000 / 60);
  };

  const showWin = () => {
    renderNew.showOverlay('winnerOver', 0x7FFFFFFF);
    timerNew.pauseWatch();
    pasteScoreToWin();
    saveWin();
    winAnimation();
  };

  const findSolution = (inputs) => {
    const currVal = [];

    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      if (element.value !== '') { currVal.push(element.value); }
    }

    const currStrVal = currVal.join(',');

    if (currStrVal === fieldSolution(currVal.length)) {
      showWin();
    }
  };

  return {
    showWin,
    findSolution,
  };
}
