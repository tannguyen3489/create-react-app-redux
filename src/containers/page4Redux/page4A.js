import React from 'react';
import { loadPostListData } from '../../modules/postlist';
import { loadComments } from '../../modules/commentlist';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import postlist from '../../modules/postlist';

class Page4A extends React.Component {
    state = {
        value1: 'default value from tan.'
    };

    constructor(props) {
        super(props);
        console.info('constructor Page4 A');
    }

    componentDidMount() {}

    render() {
        let me = this;
        function ListPostItem(props) {
            const item = props.item;
            console.info('tan ne item', item, props);
            return (
                <li onClick={me.props.loadComments.bind(this, item.id)}>
                    - {item.title}
                </li>
            );
        }

        const listItems = this.props.postList.map(item => (
            <ListPostItem key={item.id} item={item} />
        ));
        return (
            <div>
                <h1>the POST list</h1>
                Component A ------ {this.props.inputValue}
                <div>{listItems}</div>
                <button onClick={this.props.loadPostListData}>
                    Load Data POST LIST
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    postList: state.postlist.postList
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loadPostListData,
            loadComments
        },
        dispatch
    );
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page4A);
