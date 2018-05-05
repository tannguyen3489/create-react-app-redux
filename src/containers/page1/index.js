import React from 'react';
import X1 from './x1.js';
import X2 from './x2.js';
import './animate.css';
import './style.css';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Page1 extends React.Component {
  state = {
    isShowModal: false,
    isFirstShow: true
  };

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((previousState, currentProps) => {
      console.log(previousState, currentProps);
      previousState.isShowModal = !previousState.isShowModal;
      previousState.isFirstShow = false;
      return previousState;
    });
  }

  componentDidMount() {}

  render() {
    var animatedClasses = classNames({
      modal: true,
      hide: this.state.isFirstShow,
      animated: true,
      fadeInRight: this.state.isShowModal,
      fadeOutRight: !this.state.isShowModal
    });

    return (
      <div>
        <h1>Page1</h1>

        <div>
          <Link to="/page1/x1">X1</Link>
          <Link to="/page1/x2">X2</Link>
        </div>

        <Switch>
          <Route path="/page1/x1" component={X1} />
          <Route path="/page1/x2" component={X2} />
        </Switch>

        <button onClick={this.toggleModal}> Toogle</button>

        <div className={animatedClasses}>
          <button onClick={this.toggleModal}> Back</button>
        </div>
      </div>
    );
  }
}

class Page1Wrap extends React.Component {
  render() {
    return <Page1 />;
  }
}

export default Page1Wrap;