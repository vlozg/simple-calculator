import {ButtonSection} from "./ButtonSection.js";
import {DisplaySection} from "./DisplaySection.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastOp: "",
            ans: {
                value: 0,
                hidden: true},
            value: 0,
            isEmptyInput: true
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.calculateCurrent = this.calculateCurrent.bind(this);
        this.numStrAppend = this.numStrAppend.bind(this);
        this.numStrPop = this.numStrPop.bind(this);
    }

    numStrAppend(char) {
        return parseFloat(this.state.value.toString()+char);
    }
    numStrPop() {
        let numStr = this.state.value.toString();
        if (numStr.length > 1)
            return parseFloat(numStr.substring(0, numStr.length - 1));
        else
            return 0;
    }

    calculateCurrent() {
        switch (this.state.lastOp) {
            case "plus":
                return this.state.ans.value + this.state.value;
            case "minus":
                return this.state.ans.value - this.state.value;
            case "times":
                return this.state.ans.value * this.state.value;
            case "divide":
                if (this.state.value != 0)
                    return this.state.ans.value / this.state.value;
                else
                    return 0;
            default:
                return this.state.value;
        }
    }

    handleInput(newValue) {
        if (!isNaN(newValue))
            if (newValue=="")
                this.setState({value: 0});
            else
                this.setState({value: parseInt(newValue), isEmptyInput: false});
    }

    handleKeyPress(event) {}

    handleButton(instruct) {
        switch(instruct) {
            case "reverse":
                this.setState((state) => ({value: state.value*(-1)}));
                break;
            case "num0":
                this.setState((state) => ({value: this.numStrAppend("0"), isEmptyInput: false}));
                break;
            case "num1":
                this.setState((state) => ({value: this.numStrAppend("1"), isEmptyInput: false}));
                break;
            case "num2":
                this.setState((state) => ({value: this.numStrAppend("2"), isEmptyInput: false}));
                break;
            case "num3":
                this.setState((state) => ({value: this.numStrAppend("3"), isEmptyInput: false}));
                break;
            case "num4":
                this.setState((state) => ({value: this.numStrAppend("4"), isEmptyInput: false}));
                break;
            case "num5":
                this.setState((state) => ({value: this.numStrAppend("5"), isEmptyInput: false}));
                break;
            case "num6":
                this.setState((state) => ({value: this.numStrAppend("6"), isEmptyInput: false}));
                break;
            case "num7":
                this.setState((state) => ({value: this.numStrAppend("7"), isEmptyInput: false}));
                break;
            case "num8":
                this.setState((state) => ({value: this.numStrAppend("8"), isEmptyInput: false}));
                break;
            case "num9":
                this.setState((state) => ({value: this.numStrAppend("9"), isEmptyInput: false}));
                break;
            case "plus":
            case "minus":
            case "times":
            case "divide":
                let newState = {};
                if (this.state.lastOp != "" || this.state.value != 0)
                    newState.lastOp = instruct;
                if (!this.state.isEmptyInput || this.state.value != 0){
                    newState.ans = {
                        value: this.calculateCurrent(),
                        hidden: false};
                    newState.value = 0;
                    newState.isEmptyInput = true;
                }
                this.setState(newState);
                break;
            case "calc":
                if (this.state.lastOp != "" || this.state.value != 0){
                    let newState = {};
                    newState.ans = {
                        value: 0,
                        hidden: true};
                    newState.value = this.calculateCurrent();
                    newState.lastOp = "calc";
                    newState.isEmptyInput = true;
                    this.setState(newState);
                }
                break;
            case "del":
                this.setState((state) => ({value: this.numStrPop()}));
                break;
            case "clear":
                this.setState({
                    lastOp: "",
                    ans: {
                        value: 0,
                        hidden: true},
                    value: 0,
                    isEmptyInput: true
                });
                break;
        }
    }

    render() {
        return (
        <React.Fragment>
            <DisplaySection value={this.state.value} lastOp={this.state.lastOp} ans={this.state.ans} onInputChange={this.handleInput}/>
            <ButtonSection onPress={this.handleButton}/>
        </React.Fragment>
        );
    }
}



ReactDOM.render(<App/>, document.querySelector('#app'));