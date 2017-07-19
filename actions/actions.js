export const GET_FEED = 'GET_FEED';
export const GET_POST = 'GET_POST';

export const getFeed = feed => ({
  type: GET_FEED,
  feed
});

export const getPost = post => ({
  type: GET_POST,
  post
});

export const fetchFeed = () => dispatch => (
  fetch('https://www.reddit.com/.json').then(res => {
    let one = res['_bodyInit'];
    let data = JSON.parse(one);
    dispatch(getFeed(data.data.children));
  })
);
