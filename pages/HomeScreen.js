import * as React from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import ArticleCard from '../components/ArticleCard';
import AttributionLink from '../components/AttributionLink';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /**
   * Home screen constructor.
   * Makes spinner show up at start
   * @param  {any} props Home screen properties
   */
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  /**
   * Called immediately after a component is mounted.
   * @return {Promise<any>} JSON feed
   */
  componentDidMount() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=dd9dbffdc22644a38587dedd8ec93111'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.orderedArticles = responseJson.articles.sort(
          (a, b) => new Date(a.publishedAt) < new Date(b.publishedAt)
        );
        this.setState({
          isLoading: false,
          dataSource: this.orderedArticles,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  onChangeInput = text => {
    let filteredArticles = this.orderedArticles.filter(article => {
      return article.title.includes(text);
    });
    this.setState({
      isLoading: false,
      dataSource: filteredArticles
    });
  };

  /**
   * Shows an spinner while RSS feed is being retrieved.
   * Once retrieved, it displays the list of news.
   * @return {JSX.Element}
   */
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder=" Search"
          onChangeText={this.onChangeInput}
          underlineColorAndroid="transparent"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <ArticleCard
              title={item.title}
              content={item.description}
              image={item.urlToImage}
              url={item.url}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={({ id }, index) => id}
        />
        <AttributionLink
          url="https://newsapi.org/"
          text="Provided by News API"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'stretch',
  },
  input: {
    margin: 15,
    backgroundColor: '#fff',
    color: '#696969',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
});
