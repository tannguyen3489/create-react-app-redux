import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Page1 from '../page1';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/page1">Page1</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route path="/page1" component={Page1} />
        </main>
    </div>
);

export default App;
