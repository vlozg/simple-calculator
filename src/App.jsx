import {ButtonSection} from "./ButtonSection.js"
import {DisplaySection} from "./DisplaySection.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ans: 0,
            value: 0,
            inputMode: "dec",
            theme: "default"
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleInput(newValue) {
        this.setState({value: parseInt(newValue)});
    }

    handleKeyPress(event) {}

    handleModeChange(event) {}

    handleButton(instruct) {
        switch(instruct) {
            case "reverse":
                this.setState((state) => ({value: state.value*(-1)}));
                break;
            case "0":
                this.setState((state) => ({value: state.value*10}));
                break;
            case "1":
                this.setState((state) => ({value: state.value*10+1}));
                break;
            case "2":
                this.setState((state) => ({value: state.value*10+2}));
                break;
            case "3":
                this.setState((state) => ({value: state.value*10+3}));
                break;
            case "4":
                this.setState((state) => ({value: state.value*10+4}));
                break;
            case "5":
                this.setState((state) => ({value: state.value*10+5}));
                break;
            case "6":
                this.setState((state) => ({value: state.value*10+6}));
                break;
            case "7":
                this.setState((state) => ({value: state.value*10+7}));
                break;
            case "8":
                this.setState((state) => ({value: state.value*10+8}));
                break;
            case "9":
                this.setState((state) => ({value: state.value*10+9}));
                break;
        }
    }

    render() {
        return (
        <React.Fragment>
            <DisplaySection value={this.state.value} mode={this.state.inputMode} onModeChange={this.handleModeChange} onInputChange={this.handleInput}/>
            <ButtonSection mode={this.state.inputMode} onPress={this.handleButton}/>
        </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));