class ButtonSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {id: "reverse",symbol:"±", isDisable: false}, 
                {id: "dot", symbol:"."}, 
                {id: "num0", symbol:"0", isDisable: false}, 
                {id: "num1", symbol:"1", isDisable: false},
                {id: "num2", symbol:"2", isDisable: false}, 
                {id: "num3", symbol:"3", isDisable: false}, 
                {id: "num4", symbol:"4", isDisable: false}, 
                {id: "num5", symbol:"5", isDisable: false}, 
                {id: "num6", symbol:"6", isDisable: false}, 
                {id: "num7", symbol:"7", isDisable: false}, 
                {id: "num8", symbol:"8", isDisable: false}, 
                {id: "num9", symbol:"9", isDisable: false}, 
                {id: "plus", symbol:"+", isDisable: false}, 
                {id: "minus", symbol:"-", isDisable: false}, 
                {id: "times", symbol:"×", isDisable: false}, 
                {id: "divide", symbol:"÷", isDisable: false}, 
                {id: "calc", symbol:"=", isDisable: false}, 
                {id: "del", symbol:"⌫", isDisable: false},
                {id: "clear", symbol:"AC", isDisable: false}
            ]
        }
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(instruct) {
        this.props.onPress(instruct);
    }

    render() {
        return (
        <div className="button-wrap">
        {this.state.buttons.map((x) => <Button key={x.id} className={x.id} value={x.symbol} isDisable={x.isDisable} onPress={() => this.props.onPress(x.id)}/>)}
        </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            pressLevel: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleLevel = this.handleLevel.bind(this);
        this.levelDown = () => {
            if (this.state.pressLevel < 2){
                this.setState((state) => ({pressLevel: state.pressLevel+1}));
            }
        }
        this.levelUp = () => {
            if (this.state.pressLevel > 0){
                this.setState((state) => ({pressLevel: state.pressLevel-1}));
            }
        }
    }

    handleClick() {
        this.props.onPress();
    }

    handleMouseDown() {
        this.setState({isPressed: true});
        this.levelDown();
    }

    handleMouseUp(act) {
        if (this.state.pressLevel == 0 & act != "leave") {
            //Mimic pressed behavior then return
            this.levelDown();
            this.levelDown();
        }
        this.setState({isPressed: false});
        this.levelUp();
        
    }

    handleLevel() {
        if (this.state.isPressed)
        {
            this.levelDown();
        } else {
            this.levelUp();
        }
    }

    render() {
        if (this.props.isDisable != false) {
            return (
                <button key={this.props.className} className={this.props.className+" disabled"} value={this.props.value} disabled>
                    {this.props.value}
                </button>
                );
        } else {
            const pressClass = (this.state.pressLevel>0?" pressed"+this.state.pressLevel:"")
            return (
            <button key={this.props.className} className={this.props.className + pressClass} 
                    onClick={this.handleClick} onMouseDown={this.handleMouseDown} 
                    onMouseUp={this.handleMouseUp} onMouseLeave={() => this.handleMouseUp("leave")} onTransitionEnd={this.handleLevel}>
                {this.props.value}
            </button>
            );
        }
    }
}

export {Button, ButtonSection};