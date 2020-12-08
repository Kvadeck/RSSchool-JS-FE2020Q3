const $ = function (id) { return document.getElementById(id); };
const qS = function (id) { return document.querySelector(id); };
const qSAll = function (id) { return document.querySelectorAll(id); };

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
