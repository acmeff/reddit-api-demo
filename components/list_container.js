import { connect } from 'react-redux';
import { fetchFeed } from '../actions/actions';
import List from './list';

const mapStateToProps = state => ({
  current_data: state
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
