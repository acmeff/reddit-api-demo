import { combineReducers } from 'redux';
import ListReducer from './list_reducer';
import DetailReducer from './detail_reducer';

export default combineReducers({
  list: ListReducer,
  detail: DetailReducer
});
