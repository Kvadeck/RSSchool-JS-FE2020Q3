import helper from './helper';

const startHelper = helper();

export default function () {
  const app = document.getElementById('app');

  const generateFields = function generateFields(len = 15, random = false) {
    const inputs = [];
    const empty = '<input type="button" class="empty" value="">';

    for (let i = len; i--;) {
      const input = `<input type="button" class="draggable" value="${i + 1}">`;
      inputs.push(input);
    }

    if (random) {
      const randInputs = startHelper.randomize(inputs);
      randInputs.push(empty);
      return randInputs.join('');
    }
    const rev = inputs.reverse();
    inputs.push(empty);

    return rev.join('');
  };

  const initialGame = function initialGame() {
    app.insertAdjacentHTML('afterbegin', `
            <audio id="audio" src="./assets/slide_effect.mp3"></audio>
            <canvas id="surprise"></canvas>
            <div class="wrapper">
                    <div class="pause-overlay" id="pauseOver">
                        <p class="pause-overlay__wrap">
                            <span class="pause-overlay__text">P A U S E</span>
                        </p>
                    </div>
                    <div class="save-overlay" id="saveOver">
                        <p class="save-overlay__wrap">
                            <span class="save-overlay__text">S A V E</span>
                        </p>
                    </div>
                    <div class="load-overlay" id="loadOver">
                        <p class="load-overlay__wrap">
                            <span class="load-overlay__text">L O A D</span>
                        </p>
                    </div>

                    <div class="winner-overlay" id="winnerOver">
                        <div class="winner-overlay__wrap">
                            <span class="winner-overlay__text">YOU WON!</span>
                            
                            <table id="scoreWinner" class="score-overlay__table"> 
                                <tbody>
                                    <tr>
                                        <th>Time</th>
                                        <th>Steps</th>
                                        <th>Field</th>
                                    </tr>
                                    <tr class="winner__row">
                                        <td><span id="scoreTime">00:00:00</span></td>
                                        <td><span id="scoreSteps">0</span></td>
                                        <td><span id="scoreField">field</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="score-overlay" id="scoreOver">
                            <h4 class= "score-overlay__title">Leaderboard</h4>                        
                            <table id="score" class="score-overlay__table"></table>
                    </div>

                    <div class="help-overlay" id="helpOver">
                            <h4 class= "score-overlay__title">Привет!</h4>                        

                                <p> Постараюсь объяснить как тут все работает.</p>

                                <p>1. У этого приложения нет возможности анимированного завершения. Но есть возможность сразу посмотреть что будет после решения.(Instant Win)</p>

                                <p>2. У таблицы score есть значение по умолчанию в виде трех результатов.</p>

                                <p>3. Drag&drop работает в пределах свободной области перемещения блока.</p>

                                <p>4. LeaderBoard сортируется по затраченому времени на игру.</p>
                            
                    </div>


                    <div class="main-game__wrapper">
                        <div class="main-game" id="game">
                            ${generateFields(15, true)}
                        </div>
                    </div>
                </div>
        `);
  };

  const topMenu = function topMenu() {
    app.insertAdjacentHTML('afterbegin', `
        <div class="topMenu-wrapper">
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle menu-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MENU</button>
                <div class="dropdown-menu" id="menu" aria-labelledby="dropdownMenuButton">
                    <h6 class="dropdown-header">Game</h6>
                    <a class="dropdown-item" data-value="start" href="#">Mix & start</a>
                    <a class="dropdown-item" data-value="pause" href="#">Pause</a>
                    <a class="dropdown-item" data-value="save" href="#">Save</a>
                    <a class="dropdown-item" data-value="load" href="#">Load</a>
                    <a class="dropdown-item" id="sound" data-value="sound" href="#">Sound</a>
                    <a class="dropdown-item" data-value="score" href="#">Score</a>
                    <a class="dropdown-item" data-value="win" href="#">Instant win</a>
                    <a class="dropdown-item" data-value="help" href="#">Help</a>

                    <h6 class="dropdown-header">Field size</h6>
                    <a class="dropdown-item" data-value="3x3" href="#">3x3</a>
                    <a class="dropdown-item" data-value="4x4" href="#">4x4</a>
                    <a class="dropdown-item" data-value="5x5" href="#">5x5</a>
                    <a class="dropdown-item" data-value="6x6" href="#">6x6</a>
                    <a class="dropdown-item" data-value="7x7" href="#">7x7</a>
                    <a class="dropdown-item" data-value="8x8" href="#">8x8</a>
                </div>
            </div>

            <div class="infobar">
                    <span>TIME:</span>
                    <span id='timer' class="infobar__timer">00:00:00</span>
                <span>STEPS:</span><span id='steps' class="infobar__steps">0</span>
            </div>

        </div>
        `);
  };

  const showOverlay = function showOverlay(id, time) {
    const el = document.getElementById(id);
    const dropdownButton = document.getElementById('dropdownMenuButton');

    el.classList.add('open');

    dropdownButton.disabled = true;

    setTimeout(() => {
      dropdownButton.disabled = false;
      el.classList.remove('open');
    }, time);
  };

  return {
    generateFields,
    showOverlay,
    initialGame,
    topMenu,
  };
}
