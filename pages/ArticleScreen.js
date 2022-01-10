import * as React from 'react';
import { Text, View, Linking, StyleSheet, Image, Button } from 'react-native';
import Article from '../components/Article';

export default class ArticleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /**
   * Renders the article detailed view, which includes:
   * - Title
   * - Description
   * - Image
   * - Url to the web version
   * @return {JSX.Element}
   */
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');
    const content = navigation.getParam('content', '');
    const image = navigation.getParam('image', '');
    const url = navigation.getParam('url', '#');
    return <Article title={title} content={content} image={image} url={url} />;
  }
}
