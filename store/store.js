import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ListReducer from '../reducers/list_reducer';

const configureStore = () => (
  createStore(
    ListReducer,
    applyMiddleware(thunk)
  )
);

export default configureStore;
