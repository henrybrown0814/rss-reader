import * as React from 'react';
import { Text, View, Linking, StyleSheet, Image, Button } from 'react-native';

export default class Article extends React.Component {
  onViewInBrowser = url => {
    Linking.openURL(url);
  };

  /**
   * Renders an article, which includes:
   * - Title
   * - Description
   * - Image
   * - Url to the web version
   * @return {JSX.Element}
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {this.props.title}
              {'\n'}
              {'\n'}
            </Text>
            <Text>{this.props.content}</Text>
          </Text>
        </View>
        <Image
          source={{ uri: this.props.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Button
          title="View in browser"
          color="#03A9F4"
          accessibilityLabel="Read in browser"
          onPress={this.onViewInBrowser.bind(this, this.props.url)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#696969',
    margin: 10,
    padding: 5,
  },
  textContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  baseText: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
