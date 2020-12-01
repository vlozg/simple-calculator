class ButtonSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {id: "reverse",symbol:"±", isDisable: false}, 
                {id: "dot", symbol:"."}, 
                {id: "0", symbol:"0", isDisable: false}, 
                {id: "1", symbol:"1", isDisable: false},
                {id: "2", symbol:"2", isDisable: false}, 
                {id: "3", symbol:"3", isDisable: false}, 
                {id: "4", symbol:"4", isDisable: false}, 
                {id: "5", symbol:"5", isDisable: false}, 
                {id: "6", symbol:"6", isDisable: false}, 
                {id: "7", symbol:"7", isDisable: false}, 
                {id: "8", symbol:"8", isDisable: false}, 
                {id: "9", symbol:"9", isDisable: false}, 
                {id: "plus", symbol:"+", isDisable: false}, 
                {id: "minus", symbol:"-", isDisable: false}, 
                {id: "times", symbol:"×", isDisable: false}, 
                {id: "divide", symbol:"÷", isDisable: false}, 
                {id: "calc", symbol:"=", isDisable: false}, 
                {id: "clear", symbol:"C.", isDisable: false}
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
    }

    render() {
        if (this.props.isDisable != false) {
            return (
                <button className={this.props.className} value={this.props.value} disabled>
                    {this.props.value}
                </button>
                );
        } else {
            return (
            <button className={this.props.className} onClick={() => this.props.onPress()}>
                {this.props.value}
            </button>
            );
        }
    }
}

export {Button, ButtonSection};