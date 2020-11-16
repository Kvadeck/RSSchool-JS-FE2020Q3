export default function () {
  const inputs = document.getElementById('game');
  const steps = document.getElementById('steps');

  const detectSize = function detectSize(len = 15) {
    switch (len) {
      case 9:
        return 'three';
      case 16:
        return '';
      case 25:
        return 'five';
      case 36:
        return 'six';
      case 49:
        return 'seven';
      case 64:
        return 'eight';
      default:
        return '';
    }
  };

  const loadFields = function loadFields() {
    const fields = [];

    const storageFields = localStorage.getItem('savedFields').split(',');

    for (let i = 0; i < storageFields.length; i++) {
      const el = storageFields[i];
      let input = `<input type="button" class="draggable" value="${el}">`;

      if (el.length === 0) {
        input = `<input type="button" class="empty" value="${el}">`;
        fields.push(input);
        // eslint-disable-next-line no-continue
        continue;
      }
      fields.push(input);
    }

    inputs.className = `main-game ${detectSize(fields.length)}`;
    inputs.innerHTML = fields.join(' ');
  };

  const loadSteps = function loadSteps() {
    const stepsText = localStorage.getItem('savedSteps');
    steps.innerText = stepsText;
  };

  return {
    loadFields,
    loadSteps,
  };
}
