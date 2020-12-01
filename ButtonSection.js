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
            buttons: [{ id: "reverse", symbol: "±" }, { id: "dot", symbol: "." }, { id: "0", symbol: "0" }, { id: "1", symbol: "1" }, { id: "2", symbol: "2" }, { id: "3", symbol: "3" }, { id: "4", symbol: "4" }, { id: "5", symbol: "5" }, { id: "6", symbol: "6" }, { id: "7", symbol: "7" }, { id: "8", symbol: "8" }, { id: "9", symbol: "9" }, { id: "A", symbol: "A" }, { id: "B", symbol: "B" }, { id: "C", symbol: "C" }, { id: "D", symbol: "D" }, { id: "E", symbol: "E" }, { id: "F", symbol: "F" }, { id: "plus", symbol: "+" }, { id: "minus", symbol: "-" }, { id: "times", symbol: "×" }, { id: "divide", symbol: "÷" }, { id: "calc", symbol: "=" }, { id: "shift_l", symbol: "<<" }, { id: "shift_r", symbol: ">>" }, { id: "rol_r", symbol: "RR" }, { id: "rol_l", symbol: "RL" }, { id: "and", symbol: "AND" }, { id: "or", symbol: "OR" }, { id: "xor", symbol: "XOR" }, { id: "not", symbol: "NOT" }, { id: "clear", symbol: "C." }]
        };
        return _this;
    }

    _createClass(ButtonSection, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "button-wrap" },
                this.state.buttons.map(function (x) {
                    return React.createElement(Button, { key: x.id, className: x.id, value: x.symbol });
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

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { className: "button " + this.props.className, type: "button", value: this.props.value });
        }
    }]);

    return Button;
}(React.Component);

export { Button, ButtonSection };