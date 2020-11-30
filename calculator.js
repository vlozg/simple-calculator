class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<p>Hello by Long Vu from React</p>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));