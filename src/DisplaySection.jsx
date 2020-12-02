import {Button} from './ButtonSection.js';

class DisplaySection extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(newValue) {
        this.props.onInputChange(newValue);
    }

    render() {
        return (
        <React.Fragment>
            <Display className="input" value={this.props.value} onInputChange={this.handleInputChange}/>
            <Display className="ans" value={this.props.ans.value} inputDisable={true} hidden={this.props.ans.hidden}/>
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
                <input className={this.props.className + (this.props.hidden?" hidden":"")} type="text" value={this.props.value} onChange={this.handleChange}/>
            </React.Fragment>
            );
        } else {
            return (
            <React.Fragment>
                <input className={this.props.className + (this.props.hidden?" hidden":"")} type="text" value={this.props.value} readOnly/>
            </React.Fragment>
            );
        }
    }
}

export {DisplaySection};