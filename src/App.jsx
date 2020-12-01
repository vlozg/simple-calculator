import {ButtonSection} from "./ButtonSection.js"
import {DisplaySection} from "./DisplaySection.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            inputMode: "dec",
            theme: "default"
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    handleInput(newValue) {
        this.setState({value: newValue});
    }

    handleKeyPress(event) {
    }

    handleModeChange(event) {}

    render() {
        return (
        <React.Fragment>
            <DisplaySection value={this.state.value} mode={this.state.inputMode} onModeChange={this.handleModeChange} onInputChange={this.handleInput}/>
            <ButtonSection focus={this.state.currentFocus} onButtonPress={this.handleButton}/>
        </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));