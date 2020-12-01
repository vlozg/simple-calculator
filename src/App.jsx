import {ButtonSection} from "./ButtonSection.js";
import {DisplaySection} from "./DisplaySection.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ans: 0,
            value: 0,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleInput(newValue) {
        this.setState({value: parseInt(newValue)});
    }

    handleKeyPress(event) {}

    handleButton(instruct) {
        switch(instruct) {
            case "reverse":
                this.setState((state) => ({value: state.value*(-1)}));
                break;
            case "num0":
                this.setState((state) => ({value: state.value*10}));
                break;
            case "num1":
                this.setState((state) => ({value: state.value*10+1}));
                break;
            case "num2":
                this.setState((state) => ({value: state.value*10+2}));
                break;
            case "num3":
                this.setState((state) => ({value: state.value*10+3}));
                break;
            case "num4":
                this.setState((state) => ({value: state.value*10+4}));
                break;
            case "num5":
                this.setState((state) => ({value: state.value*10+5}));
                break;
            case "num6":
                this.setState((state) => ({value: state.value*10+6}));
                break;
            case "num7":
                this.setState((state) => ({value: state.value*10+7}));
                break;
            case "num8":
                this.setState((state) => ({value: state.value*10+8}));
                break;
            case "num9":
                this.setState((state) => ({value: state.value*10+9}));
                break;
        }
    }

    render() {
        return (
        <React.Fragment>
            <DisplaySection value={this.state.value} onInputChange={this.handleInput}/>
            <ButtonSection onPress={this.handleButton}/>
        </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));