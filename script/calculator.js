class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <React.Fragment>
            <DisplaySection/>
            <ButtonSection/>
        </React.Fragment>
        );
    }
}

class DisplaySection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <React.Fragment>
            <MainDisplay/>
            <div>
                <Button className="binary" value="B"/>
                <SubDisplay value="0"/>
            </div>
            <div>
                <Button className="hexa" value="H"/>
                <SubDisplay value="0"/>
            </div>
        </React.Fragment>
        );
    }
}

class SubDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <React.Fragment>
            <input type="text" value={this.props.value}/>
        </React.Fragment>
        );
    }
}

class MainDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <React.Fragment>
            <input type="text" value={this.props.value}/>
        </React.Fragment>
        );
    }
}

class ButtonSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <Button className="button" value="Test"/>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <input className={"button "+this.props.className} type="button" value={this.props.value}/>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));