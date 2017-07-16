import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  componentDidMount() {
    let feed = fetch('https://www.reddit.com/.json').then(res => {
      let one = res['_bodyInit'];
      one = JSON.parse(one);
      console.log(one['data']);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make automatically reload.</Text>
        <Text>Shake your phone open the developer menu.</Text>
      </View>
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
