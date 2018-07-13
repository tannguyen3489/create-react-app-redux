// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';

let $ = require('jquery');

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.inputElement = React.createRef();
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    componentDidMount() {
        console.info('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.info('componentDidUpdate');
        let errorMsg = this.props.getErrorMessage();
        if (!errorMsg) {
            errorMsg = '';
        }
        let target = $(this.inputElement.current);
        target.tooltip('dispose');
        target.tooltip({
            title: errorMsg
        });
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        console.info('render MyInput');
        return (
            <div className="form-group">
                tan test: {this.props.dataInput.abcd}
                <input
                    data-toggle="tooltip"
                    data-placement="top"
                    title={errorMessage}
                    className="form-control"
                    onChange={this.changeValue}
                    type="text"
                    name={this.props.name}
                    ref={this.inputElement}
                    value={this.props.getValue() || ''}
                />
                <span>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(MyInput);
