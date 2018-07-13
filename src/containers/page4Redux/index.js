import React from 'react';
import ComponentA from './page4A';
import ComponentB from './page4B';

class Page4 extends React.Component {
    state = {
        value1: 'default value from tan.'
    };

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {}

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>Page4</h1>
                <input
                    type="text"
                    name="value1"
                    id="value1"
                    onChange={this.handleInputChange}
                    value={this.state.value1}
                />
                <ComponentA
                    inputValue={this.state.value1 + ' for component A'}
                />
                <hr />
                <ComponentB
                    inputValue={this.state.value1 + ' for component B1'}
                />
                <ComponentB
                    inputValue={this.state.value1 + ' for component B2'}
                />
            </div>
        );
    }
}

class Page4Wrap extends React.Component {
    render() {
        return <Page4 />;
    }
}

export default Page4Wrap;
