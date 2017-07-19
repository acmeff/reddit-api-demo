import { connect } from 'react-redux';
import Detail from './detail';

const mapStateToProps = state => {
  console.log(state.detail);
  return {detail: state.detail};
};


export default connect(mapStateToProps, null)(Detail);
