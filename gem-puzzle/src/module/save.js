import helper from './helper';

const helperStarter = helper();

export default function () {
  const inputs = document.getElementById('game').children;
  const timer = document.getElementById('timer');
  const steps = document.getElementById('steps');

  const saveFields = function saveFields() {
    const savedGameInputs = [];
    for (let i = 0; i < inputs.length; i++) {
      const el = inputs[i];
      savedGameInputs.push(el.value);
    }
    localStorage.setItem('savedFields', savedGameInputs);
  };

  const saveTime = function saveTime() {
    const curentTime = timer.innerText;
    const seconds = helperStarter.convertToSeconds(curentTime);
    localStorage.setItem('savedTimer', seconds);
  };

  const saveSteps = function saveSteps() {
    localStorage.setItem('savedSteps', steps.innerText);
  };

  return {
    saveFields,
    saveTime,
    saveSteps,

  };
}
