var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Button } from './ButtonSection.js';

var DisplaySection = function (_React$Component) {
    _inherits(DisplaySection, _React$Component);

    function DisplaySection(props) {
        _classCallCheck(this, DisplaySection);

        var _this = _possibleConstructorReturn(this, (DisplaySection.__proto__ || Object.getPrototypeOf(DisplaySection)).call(this, props));

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(DisplaySection, [{
        key: "handleInputChange",
        value: function handleInputChange(newValue) {
            this.props.onInputChange(newValue);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(Display, { value: this.props.value, onInputChange: this.handleInputChange })
            );
        }
    }]);

    return DisplaySection;
}(React.Component);

var Display = function (_React$Component2) {
    _inherits(Display, _React$Component2);

    function Display(props) {
        _classCallCheck(this, Display);

        var _this2 = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

        _this2.handleChange = _this2.handleChange.bind(_this2);
        return _this2;
    }

    _createClass(Display, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.props.onInputChange(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.inputDisable != true) {
                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement("input", { type: "text", value: this.props.value, onChange: this.handleChange })
                );
            } else {
                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement("input", { type: "text", value: this.props.value, readOnly: true })
                );
            }
        }
    }]);

    return Display;
}(React.Component);

export { DisplaySection };