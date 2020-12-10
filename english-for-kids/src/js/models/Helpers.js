const $ = function (selector) { return document.getElementById(selector); };
const qS = function (selector) { return document.querySelector(selector); };
const qSAll = function (selector) { return document.querySelectorAll(selector); };

function randomArrOfObj(data) {
  return data.sort(() => Math.random() - 0.5);
}

function randomObj(obj) {
  const arr = [];
  Object.keys(obj)
    .sort(() => Math.random() - 0.5)
    .forEach((k) => {
      arr.push(obj[k]);
    });
  return arr;
}

function playAudio(e) {
  if (!e) return;
  e.play();
}

export {
  randomArrOfObj, randomObj, $, qS, qSAll, playAudio,
};
