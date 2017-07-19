import React from 'react';
import { Text,
         View,
         Image,
         StyleSheet,
         TouchableHighlight } from 'react-native';

export default class Post extends React.Component {

  onPressPost() {
    // console.log('pressed');
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPressPost.bind(this)}>
        <View style={styles.container}>
          <Text>Detail</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000'

  },
});
