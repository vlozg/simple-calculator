var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonSection = function (_React$Component) {
    _inherits(ButtonSection, _React$Component);

    function ButtonSection(props) {
        _classCallCheck(this, ButtonSection);

        var _this = _possibleConstructorReturn(this, (ButtonSection.__proto__ || Object.getPrototypeOf(ButtonSection)).call(this, props));

        _this.state = {
            buttons: [{ id: "reverse", symbol: "±", isDisable: false }, { id: "dot", symbol: "." }, { id: "num0", symbol: "0", isDisable: false }, { id: "num1", symbol: "1", isDisable: false }, { id: "num2", symbol: "2", isDisable: false }, { id: "num3", symbol: "3", isDisable: false }, { id: "num4", symbol: "4", isDisable: false }, { id: "num5", symbol: "5", isDisable: false }, { id: "num6", symbol: "6", isDisable: false }, { id: "num7", symbol: "7", isDisable: false }, { id: "num8", symbol: "8", isDisable: false }, { id: "num9", symbol: "9", isDisable: false }, { id: "plus", symbol: "+", isDisable: false }, { id: "minus", symbol: "-", isDisable: false }, { id: "times", symbol: "×", isDisable: false }, { id: "divide", symbol: "÷", isDisable: false }, { id: "calc", symbol: "=", isDisable: false }, { id: "del", symbol: "⌫", isDisable: false }, { id: "clear", symbol: "AC", isDisable: false }]
        };
        _this.handleButton = _this.handleButton.bind(_this);
        return _this;
    }

    _createClass(ButtonSection, [{
        key: "handleButton",
        value: function handleButton(instruct) {
            this.props.onPress(instruct);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "button-wrap" },
                this.state.buttons.map(function (x) {
                    return React.createElement(Button, { key: x.id, className: x.id, value: x.symbol, isDisable: x.isDisable, onPress: function onPress() {
                            return _this2.props.onPress(x.id);
                        } });
                })
            );
        }
    }]);

    return ButtonSection;
}(React.Component);

var Button = function (_React$Component2) {
    _inherits(Button, _React$Component2);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this3 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this3.state = {
            isPressed: false,
            pressLevel: 0
        };
        _this3.handleClick = _this3.handleClick.bind(_this3);
        _this3.handleMouseDown = _this3.handleMouseDown.bind(_this3);
        _this3.handleMouseUp = _this3.handleMouseUp.bind(_this3);
        _this3.handleLevel = _this3.handleLevel.bind(_this3);
        _this3.levelDown = function () {
            if (_this3.state.pressLevel < 2) {
                _this3.setState(function (state) {
                    return { pressLevel: state.pressLevel + 1 };
                });
            }
        };
        _this3.levelUp = function () {
            if (_this3.state.pressLevel > 0) {
                _this3.setState(function (state) {
                    return { pressLevel: state.pressLevel - 1 };
                });
            }
        };
        return _this3;
    }

    _createClass(Button, [{
        key: "handleClick",
        value: function handleClick() {
            this.props.onPress();
        }
    }, {
        key: "handleMouseDown",
        value: function handleMouseDown() {
            this.setState({ isPressed: true });
            this.levelDown();
        }
    }, {
        key: "handleMouseUp",
        value: function handleMouseUp(act) {
            if (this.state.pressLevel == 0 & act != "leave") {
                //Mimic pressed behavior then return
                this.levelDown();
                this.levelDown();
            }
            this.setState({ isPressed: false });
            this.levelUp();
        }
    }, {
        key: "handleLevel",
        value: function handleLevel() {
            if (this.state.isPressed) {
                this.levelDown();
            } else {
                this.levelUp();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            if (this.props.isDisable != false) {
                return React.createElement(
                    "button",
                    { key: this.props.className, className: this.props.className + " disabled", value: this.props.value, disabled: true },
                    this.props.value
                );
            } else {
                var pressClass = this.state.pressLevel > 0 ? " pressed" + this.state.pressLevel : "";
                return React.createElement(
                    "button",
                    { key: this.props.className, className: this.props.className + pressClass,
                        onClick: this.handleClick, onMouseDown: this.handleMouseDown,
                        onMouseUp: this.handleMouseUp, onMouseLeave: function onMouseLeave() {
                            return _this4.handleMouseUp("leave");
                        }, onTransitionEnd: this.handleLevel },
                    this.props.value
                );
            }
        }
    }]);

    return Button;
}(React.Component);

export { Button, ButtonSection };