export default class Card {
  constructor() {
    this.cardsPoint = document.getElementById('cardsPoint');
    this.audio = document.getElementById('audio');
    this.setEvents();
  }

  playAudio() {
    this.audio.play();
  }

  setEvents() {
    const {
      cardsPoint,
    } = this;

    cardsPoint.addEventListener('click', (e) => {
      if (e.target.id === 'wordReverse') {
        console.log('something has come...');
      }
    });

    cardsPoint.addEventListener('click', (e) => {
      const parrentItem = e.target.parentElement;

      if (parrentItem.className === 'card') {
        const audio = document.getElementById('audio');
        audio.play();
      }
    });
  }
}
