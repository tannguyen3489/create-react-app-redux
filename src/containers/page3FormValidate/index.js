import React from 'react';

class Page3 extends React.Component {
    state = {
        value1: 'default value from tan.',
        checkBoxValue1: true
    };

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {}

    // handleInputChange = ({ target: { name, value } }) => {
    //     console.info('tan ne', name, value, this)
    //     this.setState({ [name]: value })
    // }

    handleInputChange(event) {
        console.info('tan ne', event, event.target, this);
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
                <h1>Page3</h1>
                <input
                    onChange={this.handleInputChange}
                    name="value1"
                    value={this.state.value1}
                    type="text"
                />
                <input
                    type="checkbox"
                    onChange={this.handleInputChange}
                    value="1"
                    name="checkBoxValue1"
                    checked={this.state.checkBoxValue1}
                />
            </div>
        );
    }
}

class Page3Wrap extends React.Component {
    render() {
        return <Page3 />;
    }
}

export default Page3Wrap;
