## Overview:

This is a simple two-screen app built on React Native that fetches from the reddit api (https://www.reddit.com/.json).

Components:

- `List` component/screen displays a list of all of the front page information that is returned from the api call
- `Post`s are the individual components that are displayed in the list
- `Detail` component/screen displays just one post

Methods:

- Redux controls the data flow:
  - Store has two pieces:
    - the `ListReducer` produces all current posts in an array
    - the `DetailReducer` produces an object that holds the info for just one post
  - Actions:
    - `fetchFeed` makes the api call, then dispatches `getFeed`, which is sent to the `ListReducer`
    - `getPost` takes the information for a single post and sends it to the `DetailReducer`


- `StackNavigator` from `react-navigation` controls navigation between screens

-  `react-native`'s `RefreshControl` allows the list screen to be refreshed when the user drags down on the screen


## Instructions:

Follow [this link][expo] for instructions on how to get this app running on Expo.

(You will need to have [Expo][expo] installed on your mobile device in order to demo this app. The above link has instructions for how to download it.)

[expo]:https://expo.io/@acmeff/reddit-api

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
