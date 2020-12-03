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
            lastOp: "",
            ans: {
                value: 0,
                hidden: true },
            value: 0,
            isEmptyInput: true
        };
        _this.handleInput = _this.handleInput.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.handleButton = _this.handleButton.bind(_this);
        _this.calculateCurrent = _this.calculateCurrent.bind(_this);
        _this.numStrAppend = _this.numStrAppend.bind(_this);
        _this.numStrPop = _this.numStrPop.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "numStrAppend",
        value: function numStrAppend(char) {
            return parseFloat(this.state.value.toString() + char);
        }
    }, {
        key: "numStrPop",
        value: function numStrPop() {
            var numStr = this.state.value.toString();
            if (numStr.length > 1) return parseFloat(numStr.substring(0, numStr.length - 1));else return 0;
        }
    }, {
        key: "calculateCurrent",
        value: function calculateCurrent() {
            switch (this.state.lastOp) {
                case "plus":
                    return this.state.ans.value + this.state.value;
                case "minus":
                    return this.state.ans.value - this.state.value;
                case "times":
                    return this.state.ans.value * this.state.value;
                case "divide":
                    if (this.state.value != 0) return this.state.ans.value / this.state.value;else return 0;
                default:
                    return this.state.value;
            }
        }
    }, {
        key: "handleInput",
        value: function handleInput(newValue) {
            if (!isNaN(newValue)) if (newValue == "") this.setState({ value: 0 });else this.setState({ value: parseInt(newValue), isEmptyInput: false });
        }
    }, {
        key: "handleKeyPress",
        value: function handleKeyPress(event) {}
    }, {
        key: "handleButton",
        value: function handleButton(instruct) {
            var _this2 = this;

            switch (instruct) {
                case "reverse":
                    this.setState(function (state) {
                        return { value: state.value * -1 };
                    });
                    break;
                case "num0":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("0"), isEmptyInput: false };
                    });
                    break;
                case "num1":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("1"), isEmptyInput: false };
                    });
                    break;
                case "num2":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("2"), isEmptyInput: false };
                    });
                    break;
                case "num3":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("3"), isEmptyInput: false };
                    });
                    break;
                case "num4":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("4"), isEmptyInput: false };
                    });
                    break;
                case "num5":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("5"), isEmptyInput: false };
                    });
                    break;
                case "num6":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("6"), isEmptyInput: false };
                    });
                    break;
                case "num7":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("7"), isEmptyInput: false };
                    });
                    break;
                case "num8":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("8"), isEmptyInput: false };
                    });
                    break;
                case "num9":
                    this.setState(function (state) {
                        return { value: _this2.numStrAppend("9"), isEmptyInput: false };
                    });
                    break;
                case "plus":
                case "minus":
                case "times":
                case "divide":
                    var newState = {};
                    if (this.state.lastOp != "" || this.state.value != 0) newState.lastOp = instruct;
                    if (!this.state.isEmptyInput || this.state.value != 0) {
                        newState.ans = {
                            value: this.calculateCurrent(),
                            hidden: false };
                        newState.value = 0;
                        newState.isEmptyInput = true;
                    }
                    this.setState(newState);
                    break;
                case "calc":
                    if (this.state.lastOp != "" || this.state.value != 0) {
                        var _newState = {};
                        _newState.ans = {
                            value: 0,
                            hidden: true };
                        _newState.value = this.calculateCurrent();
                        _newState.lastOp = "calc";
                        _newState.isEmptyInput = true;
                        this.setState(_newState);
                    }
                    break;
                case "del":
                    this.setState(function (state) {
                        return { value: _this2.numStrPop() };
                    });
                    break;
                case "clear":
                    this.setState({
                        lastOp: "",
                        ans: {
                            value: 0,
                            hidden: true },
                        value: 0,
                        isEmptyInput: true
                    });
                    break;
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(DisplaySection, { value: this.state.value, ans: this.state.ans, onInputChange: this.handleInput }),
                React.createElement(ButtonSection, { onPress: this.handleButton, opSelected: this.state.lastOp })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));