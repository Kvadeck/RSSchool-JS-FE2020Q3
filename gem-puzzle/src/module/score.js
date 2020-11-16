export default function () {
  const score = document.getElementById('score');
  const renderScore = function renderScore(param) {
    const scoreItems = [];
    let i = 0;

    scoreItems.push(` 
            <tr>
                <th>Id</th>
                <th>Time</th>
                <th>Steps</th>
                <th>Field</th>
            </tr>`);

    param.forEach((arrayItem) => {
      scoreItems.push(`<tr><td class="score__item-position">${i + 1}. </td><td class="score__item-time">${arrayItem.time}</td><td class="score__item-steps">${arrayItem.steps}</td><td class="score__item-field">${arrayItem.field}</td></tr>`);
      i++;
    });
    return scoreItems.join('');
  };
  const scoreShow = function scoreShow() {
    const defaultScore = [
      { time: '00:00:10', steps: '666', field: 'four' },
      { time: '00:00:15', steps: '777', field: 'eight' },
      { time: '00:00:20', steps: '888', field: 'three' },
    ];

    const getScore = JSON.parse(localStorage.getItem('score'));

    const pasteHTML = renderScore((!getScore) ? defaultScore : getScore);
    score.innerHTML = pasteHTML;
  };

  return {
    scoreShow,
  };
}
