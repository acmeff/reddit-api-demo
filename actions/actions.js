export const GET_FEED = 'GET_DATA';

export const getFeed = feed => ({
  type: GET_FEED
});

export const fetchFeed = () => dispatch => (
  fetch('https://www.reddit.com/.json').then(res => {
    let one = res['_bodyInit'];
    let data = JSON.parse(one);
    dispatch(getFeed(res));
  })
);
