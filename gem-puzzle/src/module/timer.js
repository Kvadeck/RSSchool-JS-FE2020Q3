let timer;

export default function () {
  const steps = document.getElementById('steps');
  const watch = document.querySelector('#timer');

  const watchTemplate = function watchTemplate(dateObj) {
    watch.innerHTML = `${(`0${dateObj.getUTCHours()}`).slice(-2)}:${
      (`0${dateObj.getUTCMinutes()}`).slice(-2)}:${
      (`0${dateObj.getUTCSeconds()}`).slice(-2)}`;
  };

  const watchWrapper = function watchWrapper(milliseconds = 0) {
    function startWatch() {
      clearInterval(timer);
      timer = setInterval(() => {
        // eslint-disable-next-line no-param-reassign
        milliseconds += 10;
        watchTemplate(new Date(milliseconds));
      }, 10);
    }

    function resetWatch() {
      // eslint-disable-next-line no-param-reassign
      milliseconds = 0;
      clearInterval(timer);
      watch.innerHTML = '00:00:00';
    }

    return {
      startWatch,
      resetWatch,
    };
  };

  const pauseWatch = function pauseWatch() {
    clearInterval(timer);
  };

  const stepCount = function stepCount(count = 0) {
    function countUp() {
      // eslint-disable-next-line no-param-reassign
      count++;
      return count;
    }
    return countUp;
  };

  const changeCounter = function changeCounter(count) {
    // eslint-disable-next-line no-return-assign
    return steps.innerText = count;
  };

  return {
    watchWrapper,
    pauseWatch,
    stepCount,
    changeCounter,
    watchTemplate,
  };
}
