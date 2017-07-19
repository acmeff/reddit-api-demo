import { GET_POST } from '../actions/actions';


const ListReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_POST:
      return action.post;
    default:
      return state;
  }
};


export default ListReducer;
