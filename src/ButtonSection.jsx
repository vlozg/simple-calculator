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

export {Button, ButtonSection};