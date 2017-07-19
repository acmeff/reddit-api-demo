import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import configureStore from './store/store';
import ListContainer from './components/list_container';
import Detail from './components/detail';

const store = configureStore();

const NavApp = StackNavigator({
  list: { screen: ListContainer },
  detail: { screen: Detail }
});

export default class App extends React.Component {

  render() {
    return (
      <Provider store = { store } style={styles.container}>
        <NavApp/>
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
