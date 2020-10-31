'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Keyboard =
/*#__PURE__*/
function () {
  function Keyboard(fieldElement) {
    _classCallCheck(this, Keyboard);

    this.keyboard = null;
    this.display = fieldElement;
    this.properties = {
      cursorPosition: 0,
      audio: true,
      value: '',
      end: '',
      capsLock: false,
      shift: false,
      ru: 0,
      micro: false
    };
    this.keys = [[['`', 'ё'], '~'], ['1', '!'], ['2', ['@', '"']], ['3', ['#', '№']], ['4', ['$', ';']], ['5', '%'], ['6', ['^', ':']], ['7', ['&', '?']], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'Backspace', [['q', 'й']], [['w', 'ц']], [['e', 'у']], [['r', 'к']], [['t', 'е']], [['y', 'н']], [['u', 'г']], [['i', 'ш']], [['o', 'щ']], [['p', 'з']], [['[', 'х'], '{'], [[']', 'ъ'], '}'], 'Enter', 'Caps Lock', [['a', 'ф']], [['s', 'ы']], [['d', 'в']], [['f', 'а']], [['g', 'п']], [['h', 'р']], [['j', 'о']], [['k', 'л']], [['l', 'д']], [[';', 'ж'], ':'], [["'", 'э'], '"'], ['\\', ['|', '/']], 'Shift', [['z', 'я']], [['x', 'ч']], [['c', 'с']], [['v', 'м']], [['b', 'и']], [['n', 'т']], [['m', 'ь']], [[',', 'б'], '<'], [['.', 'ю'], '>'], [['/', '.'], ['?', ',']], 'Space', 'Hide', 'EN', 'Left', 'Right', 'Audio', 'Micro'];
    this.init();
    this.createKeys();
    this.initCursorHandler();
    this.initKeyEnterHandler();
  }

  _createClass(Keyboard, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.keyboard = document.createElement("div");
      this.keyboard.classList.add("keyboard");
      document.body.append(this.keyboard);
      this.display.addEventListener('focus', function () {
        _this.keyboard.classList.remove("keyboard--hidden");
      });
    }
  }, {
    key: "createKeys",
    value: function createKeys() {
      var _this2 = this;

      var ru = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.properties.ru;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var key = _step.value;
          var button = document.createElement("button");

          if (key instanceof Array) {
            if (key[0] instanceof Array) button.innerHTML = key[0][ru];else button.innerHTML = key[0];
            if (key[1] instanceof Array) button.dataset.shift = key[1][ru];else if (key[1] != undefined && (ru != 1 || !(key[0] instanceof Array))) button.dataset.shift = key[1];
          }

          switch (key) {
            case 'Right':
              button.classList.add("keyboard__key");
              button.dataset.keycode = 39;
              button.insertAdjacentHTML("beforeend", "\n               <i class=\"material-icons\">keyboard_arrow_right</i>");
              break;

            case 'Left':
              button.classList.add("keyboard__key");
              button.dataset.keycode = 37;
              button.insertAdjacentHTML("beforeend", "\n               <i class=\"material-icons\">keyboard_arrow_left</i>");
              break;

            case 'Hide':
              button.classList.add("keyboard__key", "keyboard__key--wide");
              button.insertAdjacentHTML("beforeend", "\n               <i class=\"material-icons\">keyboard_hide</i>");
              break;

            case 'Space':
              button.classList.add("keyboard__key", "keyboard__key--extra-wide");
              button.dataset.keycode = 32;
              button.insertAdjacentHTML("beforeend", "\n               <i class=\"material-icons\">space_bar</i>");
              break;

            case 'Shift':
              button.classList.add("keyboard__key", "keyboard__key--wide");
              button.dataset.keycode = 16;
              button.insertAdjacentHTML("beforeend", "\n                <i class=\"material-icons\">north</i>");
              break;

            case 'Caps Lock':
              button.classList.add("keyboard__key", "keyboard__key--wide");
              button.dataset.keycode = 20;
              button.insertAdjacentHTML("beforeend", "\n               <i class=\"material-icons\">keyboard_capslock</i>");
              break;

            case 'Backspace':
              button.classList.add("keyboard__key", "keyboard__key--delete");
              button.dataset.keycode = 8;
              button.insertAdjacentHTML("beforeend", "\n              <i class=\"material-icons\">backspace</i>");
              break;

            case 'Enter':
              button.classList.add("keyboard__key", "keyboard__key--wide");
              button.dataset.keycode = 13;
              button.insertAdjacentHTML("beforeend", "\n              <i class=\"material-icons\">keyboard_return</i>");
              break;

            case 'EN':
              button.classList.add("keyboard__key", "keyboard__key--wide");
              _this2.properties.ru == 0 ? button.innerHTML = key : button.innerHTML = 'RU';
              break;

            case 'Audio':
              button.classList.add("keyboard__key");
              button.insertAdjacentHTML("beforeend", "\n              <i class=\"material-icons\">music_note</i>");
              break;

            case 'Micro':
              button.classList.add("keyboard__key");
              button.insertAdjacentHTML("beforeend", "\n              <i class=\"material-icons\">mic_off</i>");
              break;

            default:
              var symbol = key[0] instanceof Array ? key[0][0] : key[0];

              if (symbol.toUpperCase().charCodeAt(0) > 90 || symbol.toUpperCase().charCodeAt(0) < 48 || symbol.toUpperCase().charCodeAt(0) == 61 || symbol.toUpperCase().charCodeAt(0) == 59) {
                switch (symbol) {
                  case '`':
                    button.dataset.keycode = 192;
                    break;

                  case '-':
                    button.dataset.keycode = 189;
                    break;

                  case '=':
                    button.dataset.keycode = 187;
                    break;

                  case '[':
                    button.dataset.keycode = 219;
                    break;

                  case ']':
                    button.dataset.keycode = 221;
                    break;

                  case ';':
                    button.dataset.keycode = 186;
                    break;

                  case "'":
                    button.dataset.keycode = 222;
                    break;

                  case '\\':
                    button.dataset.keycode = 220;
                    break;

                  case ',':
                    button.dataset.keycode = 188;
                    break;

                  case '.':
                    button.dataset.keycode = 190;
                    break;

                  case '/':
                    button.dataset.keycode = 191;
                    break;
                }
              } else button.dataset.keycode = symbol.toUpperCase().charCodeAt(0);

              button.classList.add("keyboard__key");
          }

          button.addEventListener('click', function () {
            if (button.innerHTML.length > 2 && button.firstChild.nextSibling.classList.contains('material-icons')) {
              switch (button.firstChild.nextSibling.innerHTML) {
                case 'keyboard_arrow_left':
                  if (_this2.properties.cursorPosition > 0) --_this2.properties.cursorPosition;

                  _this2.setCursorPosition();

                  break;

                case 'keyboard_arrow_right':
                  if (_this2.properties.cursorPosition < _this2.display.value.length) {
                    ++_this2.properties.cursorPosition;
                  }

                  _this2.setCursorPosition();

                  break;

                case 'north':
                  _this2.properties.shift = !_this2.properties.shift;
                  button.classList.toggle("keyboard__key--active");

                  _this2.toggleShift();

                  break;

                case 'keyboard_hide':
                  _this2.keyboard.classList.add("keyboard--hidden");

                  break;

                case 'space_bar':
                  _this2.properties.value += ' ';

                  _this2.updateDisplay();

                  break;

                case 'keyboard_return':
                  _this2.properties.value += '\n';

                  _this2.updateDisplay();

                  break;

                case 'keyboard_capslock':
                  _this2.properties.capsLock = !_this2.properties.capsLock;
                  button.classList.toggle("keyboard__key--active");

                  _this2.changeCase();

                  break;

                case 'backspace':
                  _this2.properties.value = _this2.properties.value.substring(0, _this2.properties.value.length - 1);

                  _this2.updateDisplay();

                  break;

                case 'music_note':
                  _this2.properties.audio = !_this2.properties.audio;
                  button.querySelector('i').innerHTML = 'music_off';
                  break;

                case 'music_off':
                  _this2.properties.audio = !_this2.properties.audio;
                  button.querySelector('i').innerHTML = 'music_note';
                  break;

                case 'mic_off':
                  _this2.properties.micro = !_this2.properties.micro;
                  button.querySelector('i').innerHTML = 'mic';

                  _this2.enableSpeech();

                  break;

                case 'mic':
                  _this2.properties.micro = !_this2.properties.micro;
                  button.querySelector('i').innerHTML = 'mic_off';

                  _this2.enableSpeech();

                  break;
              }
            } else if (button.innerHTML.length == 2) {
              _this2.properties.ru == 1 ? _this2.properties.ru = 0 : _this2.properties.ru = 1;

              _this2.changeLanguage();
            } else {
              _this2.properties.value += button.innerHTML;

              _this2.updateDisplay();
            }

            _this2.setAudio(button);
          });

          _this2.keyboard.append(button);
        };

        for (var _iterator = this.keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "changeCase",
    value: function changeCase() {
      var keys = this.keyboard.querySelectorAll('button');

      if (this.properties.capsLock && !this.properties.shift || !this.properties.capsLock && this.properties.shift) {
        keys.forEach(function (key) {
          if (key.innerHTML.length == 1) key.innerHTML = key.innerHTML.toUpperCase();
        });
      } else {
        keys.forEach(function (key) {
          if (key.innerHTML.length == 1) key.innerHTML = key.innerHTML.toLowerCase();
        });
      }
    }
  }, {
    key: "toggleShift",
    value: function toggleShift() {
      var btns = this.keyboard.querySelectorAll('button');
      btns.forEach(function (btn) {
        if (btn.dataset.shift) {
          var temp = btn.dataset.shift;
          btn.dataset.shift = btn.innerHTML;
          btn.innerHTML = temp;
        }
      });
      this.changeCase();
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage() {
      this.keyboard.querySelectorAll('button').forEach(function (btn) {
        return btn.remove();
      });
      this.createKeys(this.properties.ru);
      var togglers = this.keyboard.querySelectorAll(".keyboard__key--wide");

      if (this.properties.shift) {
        togglers[2].classList.add("keyboard__key--active");
        this.toggleShift();
        this.changeCase();
      }

      if (this.properties.capsLock) {
        togglers[1].classList.add("keyboard__key--active");
        this.changeCase();
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.display.focus();
      this.display.value = this.properties.value + this.properties.end;
      this.properties.cursorPosition = this.display.selectionStart = this.display.selectionEnd = this.properties.value.length;
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue(value) {
      this.properties.value = value;
    }
  }, {
    key: "getEnd",
    value: function getEnd(value) {
      this.properties.end = value;
    }
  }, {
    key: "initCursorHandler",
    value: function initCursorHandler() {
      var _this3 = this;

      this.display.addEventListener('click', function () {
        setTimeout(function () {
          _this3.getCurrentValue(_this3.display.value.substring(0, _this3.display.selectionStart));

          _this3.properties.cursorPosition = _this3.display.selectionStart;
        });
        setTimeout(function () {
          _this3.getEnd(_this3.display.value.substring(_this3.display.selectionEnd, _this3.display.value.length));
        }, 0);
      });
    }
  }, {
    key: "setCursorPosition",
    value: function setCursorPosition() {
      this.display.focus();
      this.display.selectionStart = this.display.selectionEnd = this.properties.cursorPosition;
      this.getCurrentValue(this.display.value.substring(0, this.display.selectionStart));
      this.getEnd(this.display.value.substring(this.display.selectionEnd, this.display.value.length));
    }
  }, {
    key: "initKeyEnterHandler",
    value: function initKeyEnterHandler() {
      var _this4 = this;

      document.addEventListener('keydown', function (evt) {
        if (!_this4.keyboard.classList.contains("keyboard--hidden")) {
          if (_this4.keyboard.querySelector("[data-keycode=\"".concat(evt.keyCode, "\"]"))) {
            _this4.display.focus();

            var key = _this4.keyboard.querySelector("[data-keycode=\"".concat(evt.keyCode, "\"]"));

            if (evt.keyCode == 16) {
              _this4.properties.shift = !_this4.properties.shift;

              _this4.toggleShift();

              key.classList.toggle("keyboard__key--active");
            } else if (evt.keyCode == 20) {
              _this4.properties.capsLock = !_this4.properties.capsLock;

              _this4.changeCase();

              key.classList.toggle("keyboard__key--active");
            } else key.classList.add("keyboard__key--active");

            _this4.setAudio(key);
          }
        }
      });
      document.addEventListener('keyup', function (evt) {
        if (!_this4.keyboard.classList.contains("keyboard--hidden")) {
          if (_this4.keyboard.querySelector("[data-keycode=\"".concat(evt.keyCode, "\"]"))) {
            if (evt.keyCode == 16 || evt.keyCode == 20) return;

            _this4.display.focus();

            var key = _this4.keyboard.querySelector("[data-keycode=\"".concat(evt.keyCode, "\"]"));

            key.classList.remove("keyboard__key--active");
            _this4.properties.cursorPosition = _this4.display.selectionEnd;

            _this4.getCurrentValue(_this4.display.value.substring(0, _this4.display.selectionStart));

            _this4.getEnd(_this4.display.value.substring(_this4.display.selectionEnd, _this4.display.value.length));
          }
        }
      });
    }
  }, {
    key: "setAudio",
    value: function setAudio(btn) {
      if (this.properties.audio) {
        var audio;

        if (document.querySelector("[data-soundkey=\"".concat(btn.dataset.keycode, "\"]"))) {
          audio = document.querySelector("[data-soundkey=\"".concat(btn.dataset.keycode, "\"]"));
        } else {
          if (this.properties.ru) {
            audio = document.querySelector("[data-soundkey=\"1\"]");
          } else {
            audio = document.querySelector("[data-soundkey=\"0\"]");
          }
        }

        audio.currentTime = 0;
        audio.play();
      }
    }
  }, {
    key: "enableSpeech",
    value: function enableSpeech() {
      var _this5 = this;

      if (!this.properties.recognition) {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.properties.recognition = new SpeechRecognition();
        this.properties.recognition.interimResults = true;
        this.properties.recognition.lang = this.properties.ru ? 'ru-RU' : 'en-EN';
        this.properties.recognition.addEventListener('result', function (evt) {
          var transcript = Array.from(evt.results).map(function (result) {
            return result[0];
          }).map(function (result) {
            return result.transcript;
          }).join('');

          if (evt.results[0].isFinal) {
            _this5.properties.value += ' ' + transcript;

            _this5.updateDisplay();
          }
        });
      }

      if (this.properties.micro) {
        this.properties.recognition.addEventListener('end', this.properties.recognition.start);
        this.properties.recognition.start();
      } else {
        this.properties.recognition.removeEventListener('end', this.properties.recognition.start);
        this.properties.recognition.stop();
      }
    }
  }]);

  return Keyboard;
}();

var textarea = document.querySelector('textarea');
var keyboard = new Keyboard(textarea);