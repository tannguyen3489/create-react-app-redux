import Formsy from 'formsy-react';
import React from 'react';
import MyInput from './MyInput';
import './Page3.css';

export default class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = {
            canSubmit: false,
            testData: {
                abcd: 1,
                testValue1: 'fdasdfasd'
            }
        };
        this.form = React.createRef();
        this.submit = this.submit.bind(this);
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    submit(model) {
        debugger;
        console.info('result', this.form.current);
        console.info('result', this.form.current, this.form.current.getModel());
        // fetch('http://example.com/', {
        //     method: 'post',
        //     body: JSON.stringify(model)
        // });
    }

    render() {
        return (
            <div className="container">
                <Formsy
                    ref={this.form}
                    className="page3"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <MyInput
                        name="email"
                        dataInput={this.state.testData}
                        validations="isEmail"
                        validationError="This is not a valid email"
                        required
                    />

                    <button type="submit" disabled={!this.state.canSubmit}>
                        Submit
                    </button>
                </Formsy>
            </div>
        );
    }
}
