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
            <Display value={this.props.value} onInputChange={this.handleInputChange}/>
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

export {DisplaySection};