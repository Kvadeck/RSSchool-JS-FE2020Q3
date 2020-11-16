export default function () {
  const randomize = function randomize(data) {
    const tempData = data.slice();

    const pack = [];
    let i = data.length;
    let j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      pack.push(tempData[j]);
      tempData.splice(j, 1);
    }
    return pack;
  };

  const convertToSeconds = function convertToSeconds(curentTime) {
    const mSms = curentTime.split(':');
    const seconds = (+mSms[0]) * 60 * 60 + (+mSms[1]) * 60 + (+mSms[2]);
    return seconds * 1000;
  };

  return {
    randomize,
    convertToSeconds,
  };
}
