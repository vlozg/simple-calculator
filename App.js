var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { ButtonSection } from "./ButtonSection.js";
import { DisplaySection } from "./DisplaySection.js";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            history: "",
            lastOp: "",
            ans: 0,
            value: 0
        };
        _this.handleInput = _this.handleInput.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.handleButton = _this.handleButton.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handleInput",
        value: function handleInput(newValue) {
            if (!isNaN(newValue)) this.setState({ value: parseInt(newValue) });
        }
    }, {
        key: "handleKeyPress",
        value: function handleKeyPress(event) {}
    }, {
        key: "handleButton",
        value: function handleButton(instruct) {
            switch (instruct) {
                case "reverse":
                    this.setState(function (state) {
                        return { value: state.value * -1 };
                    });
                    break;
                case "num0":
                    this.setState(function (state) {
                        return { value: state.value * 10 };
                    });
                    break;
                case "num1":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 1 };
                    });
                    break;
                case "num2":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 2 };
                    });
                    break;
                case "num3":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 3 };
                    });
                    break;
                case "num4":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 4 };
                    });
                    break;
                case "num5":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 5 };
                    });
                    break;
                case "num6":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 6 };
                    });
                    break;
                case "num7":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 7 };
                    });
                    break;
                case "num8":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 8 };
                    });
                    break;
                case "num9":
                    this.setState(function (state) {
                        return { value: state.value * 10 + 9 };
                    });
                    break;
                case "plus":
                    break;
                case "minus":
                    break;
                case "times":
                    break;
                case "divide":
                    break;
                case "calc":
                    break;
                case "del":
                    this.setState(function (state) {
                        return { value: Math.floor(state.value / 10) };
                    });
                    break;
                case "clear":
                    break;
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(DisplaySection, { value: this.state.value, onInputChange: this.handleInput }),
                React.createElement(ButtonSection, { onPress: this.handleButton })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));