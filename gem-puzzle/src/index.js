/* eslint-disable no-case-declarations */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */

import 'bootstrap/js/dist/dropdown';

import render from './module/render';
import timerM from './module/timer';
import save from './module/save';
import load from './module/load';
import solution from './module/solution';
import score from './module/score';

const renderNew = render();
renderNew.initialGame();
renderNew.topMenu();

const saveNew = save();
const loadNew = load();

const solutionNew = solution();
const scoreNew = score();

const inputsArea = document.getElementById('game');
const menu = document.getElementById('menu');
const pauseOverlay = document.getElementById('pauseOver');
const winnerOverlay = document.getElementById('winnerOver');
const helpOverlay = document.getElementById('helpOver');
const scoreOverlay = document.getElementById('scoreOver');
const soundMenu = document.getElementById('sound');

const timerNew = timerM();
let stepNew = timerNew.stepCount();
let watchNew = timerNew.watchWrapper();

const MOBILE = /iPad|iPhone|mobile|android|webos|ios|iPod/i.test(navigator.userAgent);
const DELAY_CLICK = 150;
const TIMEOUT = 100;

let isMoved = false;

const playAudio = function playAudio() {
  const audio = document.getElementById('audio');
  audio.play();
};

const preloadAnimation = function preloadAnimation() {
  setTimeout(() => {
    const inputs = document.querySelectorAll('.main-game input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.add('show');
    }
    inputsArea.classList.add('show');
  }, 300);
};

const setAudioMenu = function setAudioMenu() {
  const sound = localStorage.getItem('sound');

  if (sound === 'off') {
    soundMenu.classList.remove('sound_off');
    soundMenu.classList.add('sound_on');
    localStorage.setItem('sound', 'on');
  } else {
    soundMenu.classList.remove('sound_on');
    soundMenu.classList.add('sound_off');
    localStorage.setItem('sound', 'off');
  }
};

const moveInputs = (e) => {
  e.preventDefault();

  setTimeout(() => {
    isMoved = false;
  }, 150);

  if (isMoved) return;

  const draggable = e.target;
  if (!draggable.classList.contains('draggable')) return;

  draggable.ondragstart = () => false;

  if (MOBILE) document.body.style.overflow = 'hidden';

  const inputs = [...inputsArea.getElementsByTagName('input')];

  const allIdx = inputs.map((el) => el.value);

  const idx = allIdx.findIndex((el) => draggable.value === el);

  const len = allIdx.length;

  const rowLen = Math.sqrt(len);
  const draggWidth = draggable.offsetWidth;
  const draggHeight = draggable.offsetHeight;

  const handlerClick = (moveX, moveY, shiftA, shiftB, cb) => {
    const timer = performance.now();
    watchNew.startWatch();

    const resetStyles = () => {
      draggable.style.transition = 'all 0s';
      draggable.style.top = '0';
      draggable.style.left = '0';
    };

    resetStyles();

    const draggLeft = draggable.getBoundingClientRect().left;
    const draggTop = draggable.getBoundingClientRect().top;
    const shiftX = (e.clientX || e.touches[0].clientX) - draggLeft;
    const shiftY = (e.clientY || e.touches[0].clientY) - draggTop;

    const changePosition = (top, left) => {
      draggable.style.transition = '';
      draggable.style.top = `${top}px`;
      draggable.style.left = `${left}px`;
      setTimeout(resetStyles, TIMEOUT);
    };

    draggable.style.position = 'relative';
    draggable.style.zIndex = '0';

    const moveTo = (x, y) => {
      let posX = moveX ? x - draggLeft - shiftX : 0;
      let posY = moveY ? y - draggTop - shiftY : 0;// + top;

      if (moveX) {
        posX = posX <= shiftA ? shiftA : posX;
        posX = posX >= shiftB ? shiftB : posX;
      }

      if (moveY) {
        posY = posY <= shiftA ? shiftA : posY;
        posY = posY >= shiftB ? shiftB : posY;
      }

      draggable.style.left = `${posX}px`;
      draggable.style.top = `${posY}px`;
    };

    let x = MOBILE ? e.touches[0].clientX : e.clientX;
    let y = MOBILE ? e.touches[0].clientY : e.clientY;

    moveTo(x, y);

    const moveAt = (event) => {
      x = MOBILE ? event.touches[0].clientX : event.clientX;
      y = MOBILE ? event.touches[0].clientY : event.clientY;
      moveTo(x, y);
    };

    const drop = () => {
      cb(performance.now() - timer, changePosition);
      if (MOBILE) {
        document.removeEventListener('touchmove', moveAt);
        document.removeEventListener('touchend', drop);
        document.body.style.overflow = '';
      } else {
        document.removeEventListener('mousemove', moveAt);
        document.removeEventListener('mouseup', drop);
      }
    };

    if (MOBILE) {
      document.addEventListener('touchmove', moveAt);
      document.addEventListener('touchend', drop);
    } else {
      document.addEventListener('mousemove', moveAt);
      document.addEventListener('mouseup', drop);
    }
  };

  const swap = (shift) => {
    setTimeout(() => {
      [inputs[idx], inputs[idx - shift]] = [inputs[idx - shift], inputs[idx]];

      timerNew.changeCounter(stepNew());
      solutionNew.findSolution(inputs);

      const sound = localStorage.getItem('sound');
      if (sound === 'on') { playAudio(); }

      inputsArea.append(...inputs);
      isMoved = false;
      draggable.removeAttribute('style');
    }, TIMEOUT);
  };

  const swapLeft = () => {
    isMoved = true;
    const cb = (delay, changePosition) => {
      if (delay < DELAY_CLICK) {
        changePosition(0, -draggWidth);
        swap(1);
      } else {
        const left = Math.abs(parseInt(draggable.style.left, 10));
        if (left < draggWidth / 2) {
          changePosition(0, 0);
        } else {
          changePosition(0, -draggWidth);
          swap(1);
        }
      }
    };
    handlerClick(true, false, -draggWidth, 0, cb);
  };

  const swapRight = () => {
    isMoved = true;
    const cb = (delay, changePosition) => {
      if (delay < DELAY_CLICK) {
        changePosition(0, draggWidth);
        swap(-1);
      } else {
        const left = Math.abs(parseInt(draggable.style.left, 10));
        if (left < draggWidth / 2) {
          changePosition(0, 0);
        } else {
          changePosition(0, draggWidth);
          swap(-1);
        }
      }
    };
    handlerClick(true, false, 0, draggWidth, cb);
  };

  const swapDown = () => {
    isMoved = true;
    const cb = (delay, changePosition) => {
      if (delay < DELAY_CLICK) {
        changePosition(draggHeight, 0);
        swap(-rowLen);
      } else {
        const top = Math.abs(parseInt(draggable.style.top, 10));
        if (top < draggHeight / 2) {
          changePosition(0, 0);
        } else {
          changePosition(draggHeight, 0);
          swap(-rowLen);
        }
      }
    };
    handlerClick(false, true, 0, draggHeight, cb);
  };

  const swapUp = () => {
    isMoved = true;
    const cb = (delay, changePosition) => {
      if (delay < DELAY_CLICK) {
        changePosition(-draggHeight, 0);
        swap(rowLen);
      } else {
        const top = Math.abs(parseInt(draggable.style.top, 10));
        if (top < draggHeight / 2) {
          changePosition(0, 0);
        } else {
          changePosition(-draggHeight, 0);
          swap(rowLen);
        }
      }
    };
    handlerClick(false, true, -draggHeight, 0, cb);
  };

  if (inputs[idx - 1] && !inputs[idx - 1].value) {
    swapLeft();
    return;
  }

  if (inputs[idx - rowLen] && !inputs[idx - rowLen].value) {
    swapUp();
    return;
  }

  if (inputs[idx + rowLen] && !inputs[idx + rowLen].value) {
    swapDown();
    return;
  }

  if (inputs[idx + 1] && !inputs[idx + 1].value) {
    swapRight();
  }
};

menu.addEventListener('click', (e) => {
  const mode = e.target;

  if (mode.tagName !== 'A') return;

  const setAreaSize = (size, className) => {
    const inputsRandom = renderNew.generateFields(size, true);

    preloadAnimation(inputsArea);

    inputsArea.innerHTML = inputsRandom;
    inputsArea.className = `main-game ${className}`;

    localStorage.setItem('savedAreaSize', [size, className]);

    stepNew = timerNew.stepCount();
    timerNew.changeCounter(0);

    watchNew.resetWatch();
    watchNew.startWatch();
  };

  switch (mode.dataset.value) {
    case '3x3':
      setAreaSize(8, 'three'); break;
    case '4x4':
      setAreaSize(15, ''); break;
    case '5x5':
      setAreaSize(24, 'five'); break;
    case '6x6':
      setAreaSize(35, 'six'); break;
    case '7x7':
      setAreaSize(48, 'seven'); break;
    case '8x8':
      setAreaSize(63, 'eight'); break;

    case 'start':

      // eslint-disable-next-line consistent-return
      if (!localStorage.getItem('savedAreaSize')) return setAreaSize(15, '');

      const getSave = localStorage.getItem('savedAreaSize').split(',');
      const size = getSave[0];
      const className = getSave[1];

      setAreaSize(size, className);

      break;

    case 'pause':
      renderNew.showOverlay('pauseOver', 0x7FFFFFFF);
      timerNew.pauseWatch();
      break;

    case 'save':
      renderNew.showOverlay('saveOver', 1000);
      for (const key in saveNew) saveNew[key]();
      break;

    case 'load':

      renderNew.showOverlay('loadOver', 500);
      preloadAnimation();

      for (const key in loadNew) loadNew[key]();

      stepNew = timerNew.stepCount(localStorage.getItem('savedSteps'));
      watchNew.resetWatch();

      const storageSeconds = parseFloat(localStorage.getItem('savedTimer'));

      timerNew.watchTemplate(new Date(storageSeconds));
      watchNew = timerNew.watchWrapper(storageSeconds);

      break;

    case 'win':
      solutionNew.showWin();
      break;

    case 'score':
      renderNew.showOverlay('scoreOver', 0x7FFFFFFF);
      timerNew.pauseWatch();

      scoreNew.scoreShow();

      break;

    case 'sound':
      setAudioMenu();
      break;

    case 'help':
      renderNew.showOverlay('helpOver', 0x7FFFFFFF);
      timerNew.pauseWatch();
      break;

    default: setAreaSize(15, ''); break;
  }
});

(function removePauseOverlayClick() {
  pauseOverlay.addEventListener('click', () => {
    renderNew.showOverlay('pauseOver', 0);
    watchNew.startWatch();
  });
}());

(function removeScoreOverlayClick() {
  scoreOverlay.addEventListener('click', () => {
    renderNew.showOverlay('scoreOver', 0);
    watchNew.startWatch();
  });
}());

(function removeWinnerOverlayClick() {
  winnerOverlay.addEventListener('click', () => {
    const question = 'Start over?';
    if (confirm(question)) {
      location.reload();
    }
  });
}());

(function removeHelpOverlayClick() {
  helpOverlay.addEventListener('click', () => {
    renderNew.showOverlay('helpOver', 0);
    watchNew.startWatch();
  });
}());

(function removeStorageBeforeStart() {
  localStorage.removeItem('savedAreaSize');
}());

(function initSoundFlag() {
  const sound = localStorage.getItem('sound');
  soundMenu.classList.add('sound_off');

  if (!sound) {
    soundMenu.classList.add('sound_off');
    localStorage.setItem('sound', 'off');
  }
}());

preloadAnimation();

if (MOBILE) {
  inputsArea.addEventListener('touchstart', moveInputs);
} else {
  inputsArea.addEventListener('mousedown', moveInputs);
}
