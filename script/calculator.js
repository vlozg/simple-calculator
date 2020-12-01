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

class DisplaySection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main: "dec",
            focus: "dec"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(newValue) {
        this.props.onInputChange(newValue);
    }

    render() {
        return (
        <React.Fragment>
            <Display value={this.props.value} onInputChange={this.handleInputChange}/>
            <div>
                <Button className="binary" value="Bin"/>
                <Display value={this.props.value} onInputChange={this.handleInputChange}/>
            </div>
            <div>
                <Button className="hexa" value="Hex"/>
                <Display value={this.props.value} onInputChange={this.handleInputChange}/>
            </div>
        </React.Fragment>
        );
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(e.target.value);
    }

    render() {
        if (this.props.inputDisable != true) {
            return (
            <React.Fragment>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </React.Fragment>
            );
        } else {
            return (
            <React.Fragment>
                <input type="text" value={this.props.value} readOnly/>
            </React.Fragment>
            );
        }
    }
}

class ButtonSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {id: "reverse",symbol:"±"}, 
                {id: "dot", symbol:"."}, 
                {id: "0", symbol:"0"}, 
                {id: "1", symbol:"1"}, 
                {id: "2", symbol:"2"}, 
                {id: "3", symbol:"3"}, 
                {id: "4", symbol:"4"}, 
                {id: "5", symbol:"5"}, 
                {id: "6", symbol:"6"}, 
                {id: "7", symbol:"7"}, 
                {id: "8", symbol:"8"}, 
                {id: "9", symbol:"9"}, 
                {id: "A", symbol:"A"}, 
                {id: "B", symbol:"B"}, 
                {id: "C", symbol:"C"}, 
                {id: "D", symbol:"D"}, 
                {id: "E", symbol:"E"}, 
                {id: "F", symbol:"F"}, 
                {id: "plus", symbol:"+"}, 
                {id: "minus", symbol:"-"}, 
                {id: "times", symbol:"×"}, 
                {id: "divide", symbol:"÷"}, 
                {id: "calc", symbol:"="}, 
                {id: "shift_l", symbol:"<<"}, 
                {id: "shift_r", symbol:">>"}, 
                {id: "rol_r", symbol:"RR"}, 
                {id: "rol_l", symbol:"RL"}, 
                {id: "and", symbol:"AND"},
                {id:"or", symbol:"OR"},
                {id: "xor", symbol:"XOR"},
                {id: "not", symbol:"NOT"},
                {id: "clear", symbol:"C."}
            ]
        }
    }

    render() {
        return (
        <div className="button-wrap">
        {this.state.buttons.map((x) => <Button key={x.id} className={x.id} value={x.symbol}/>)}
        </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <input className={"button "+this.props.className} type="button" value={this.props.value}/>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));