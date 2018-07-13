import { LinkedComponent } from 'valuelink';
import React from 'react';
import { Input } from 'valuelink/tags';

class Page2 extends LinkedComponent {
    state = {
        value1: 'default value from tan.'
    };
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {}

    render() {
        const links = this.linkAll();
        return (
            <div>
                <h1>Page2</h1>

                <Input type="text" valueLink={links.value1} />
            </div>
        );
    }
}

class Page2Wrap extends React.Component {
    render() {
        return <Page2 />;
    }
}

export default Page2Wrap;
