import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class ArticleCard extends React.Component {
  onClickReadMore = () => {
    this.props.navigation.navigate('Article', {
      title: this.props.title,
      content: this.props.content,
      image: this.props.image,
      url: this.props.url,
    });
  };
  /**
   * Renders a clickable article row, which includes:
   * - Title
   * - Short description
   * - Image
   * @return {JSX.Element}
   */
  render() {
    return (
      <Card
        title={this.props.title}
        titleStyle={styles.title}
        image={{ uri: this.props.image }}>
        <Text style={styles.text} numberOfLines={2}>
          {this.props.content}
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Read more"
          onPress={this.onClickReadMore.bind(this)}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#03A9F4',
  },
  text: {
    marginBottom: 10,
  },
  title: {
    margin: 10,
  },
});
