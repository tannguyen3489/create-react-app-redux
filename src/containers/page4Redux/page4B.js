import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
        const list = this.props.commentList.map(item => {
            return <li key={item.id}>{item.body}</li>;
        });
        return (
            <div>
                Component B ------ {this.props.inputValue}
                <ul>{list}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    commentList: state.commentlist.commentList
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // loadPostListData,
            // loadComments
        },
        dispatch
    );
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page4B);
