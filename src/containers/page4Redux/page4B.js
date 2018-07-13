import React from 'react';

class Page4B extends React.Component {
    state = {
        value1: 'default value from tan.'
    };

    constructor(props) {
        super(props);
        console.info('constructor Page4 B');
    }

    componentDidMount() {}

    render() {
        return <div>Component B ------ {this.props.inputValue}</div>;
    }
}

export default Page4B;
