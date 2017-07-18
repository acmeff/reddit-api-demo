export const GET_FEED = 'GET_FEED';

export const getFeed = feed => ({
  type: GET_FEED,
  feed
});

export const fetchFeed = () => dispatch => (
  fetch('https://www.reddit.com/.json').then(res => {
    let one = res['_bodyInit'];
    let data = JSON.parse(one);
    dispatch(getFeed(data.data.children[0].data));
  })
);
