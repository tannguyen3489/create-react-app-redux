import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Page1 from '../page1';
import Page2 from '../page2';
import Page3 from '../page3FormValidate';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
            <Link to="/page3">Page3</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
        </main>
    </div>
);

export default App;
