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
                return this.state.ans.value / this.state.value;
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
                this.setState((state) => ({value: state.value*10, isEmptyInput: false}));
                break;
            case "num1":
                this.setState((state) => ({value: state.value*10+1, isEmptyInput: false}));
                break;
            case "num2":
                this.setState((state) => ({value: state.value*10+2, isEmptyInput: false}));
                break;
            case "num3":
                this.setState((state) => ({value: state.value*10+3, isEmptyInput: false}));
                break;
            case "num4":
                this.setState((state) => ({value: state.value*10+4, isEmptyInput: false}));
                break;
            case "num5":
                this.setState((state) => ({value: state.value*10+5, isEmptyInput: false}));
                break;
            case "num6":
                this.setState((state) => ({value: state.value*10+6, isEmptyInput: false}));
                break;
            case "num7":
                this.setState((state) => ({value: state.value*10+7, isEmptyInput: false}));
                break;
            case "num8":
                this.setState((state) => ({value: state.value*10+8, isEmptyInput: false}));
                break;
            case "num9":
                this.setState((state) => ({value: state.value*10+9, isEmptyInput: false}));
                break;
            case "plus":
                let newState = {};
                if (this.state.lastOp != "" || this.state.value != 0)
                    newState.lastOp = instruct;
                if (!this.state.isEmptyInput){
                    newState.ans = {
                        value: this.calculateCurrent(),
                        hidden: false};
                    newState.value = 0;
                    newState.isEmptyInput = 0;
                }
                this.setState(newState);
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
                this.setState((state) => ({value: Math.floor(state.value/10)}));
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
            <ButtonSection onPress={this.handleButton}/>
        </React.Fragment>
        );
    }
}



ReactDOM.render(<App/>, document.querySelector('#app'));