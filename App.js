import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './store/store';
import ListContainer from './components/list_container';

const store = configureStore();

export default class App extends React.Component {

  render() {
    return (
      <Provider store = { store } style={styles.container}>
        <ListContainer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
