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
        if (numStr[0] == "-" && numStr.length == 2)
            return 0;
        else if (numStr.length > 1)
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
            case "num1":
            case "num2":
            case "num3":
            case "num4":
            case "num5":
            case "num6":
            case "num7":
            case "num8":
            case "num9":
                if (this.state.isEmptyInput)
                    this.setState((state) => ({value: instruct[instruct.length-1], isEmptyInput: false}));
                else
                    this.setState((state) => ({value: this.numStrAppend(instruct[instruct.length-1]), isEmptyInput: false}));
                break;
            case "plus":
            case "minus":
            case "times":
            case "divide":
                let newState = {};
                if (!(this.state.lastOp == "" && this.state.value == 0 && this.state.isEmptyInput))
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
                if (this.state.lastOp == "calc")
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
            <DisplaySection value={this.state.value} ans={this.state.ans} onInputChange={this.handleInput}/>
            <ButtonSection onPress={this.handleButton} opSelected={this.state.lastOp}/>
        </React.Fragment>
        );
    }
}



ReactDOM.render(<App/>, document.querySelector('#app'));