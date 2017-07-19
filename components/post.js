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
    const { navigate } = this.props.nav;

    return (
      <TouchableHighlight
        onPress={() => navigate('detail')}>
        <View style={styles.container}>
          <Image
            style={{width: 50, height:  50}}
            source={{uri: `${this.props.thumbnail}`}}/>
          <Text>Author: {this.props.author}</Text>
          <Text>Title: {this.props.title}</Text>
          <Text>Subreddit: {this.props.subreddit}</Text>
          <Text>Upvotes: {this.props.ups}</Text>
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
