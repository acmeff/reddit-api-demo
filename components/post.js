import React from 'react';
import { Text,
         View,
         Image,
         StyleSheet,
         TouchableHighlight } from 'react-native';

export default class Post extends React.Component {

  onPressPost() {
    this.props.getPost({post: this.props});
    this.props.nav.navigate('detail');
  }

  render() {

    return (
      <TouchableHighlight
        onPress={this.onPressPost.bind(this)}>
        <View style={styles.container}>
          <Image
            style={styles.thumbnail}
            source={{uri: `${this.props.thumbnail}`}}/>
          <View style={styles.item}>
            <Text>Author: {this.props.author}</Text>
            <Text>Title: {this.props.title}</Text>
            <Text>Subreddit: {this.props.subreddit}</Text>
            <Text>Upvotes: {this.props.ups}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  item: {
    paddingRight: 50,
    paddingLeft: 5
  },
  thumbnail: {
    width: 50,
    height: 50
  }
});
