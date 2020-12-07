function randomArrOfObj(data) {
  const tempData = data.slice();
  const pack = [];
  let i = data.length;

  while (i) {
    i -= 1;
    const j = Math.floor(Math.random() * (i + 1));
    pack.push(tempData[j]);
    tempData.splice(j, 1);
  }
  return pack;
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

export { randomArrOfObj, randomObj };
