import { connect } from 'react-redux';
import { fetchFeed, getPost } from '../actions/actions';
import List from './list';

const mapStateToProps = state => ({
  current_data: state.list
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed()),
  getPost: (post) => dispatch(getPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
