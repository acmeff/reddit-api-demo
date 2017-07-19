import { GET_FEED } from '../actions/actions';


const ListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FEED:
      return action.feed;
    default:
      return state;
  }
};


export default ListReducer;
