import {createStackNavigator} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import ArticleScreen from './pages/ArticleScreen';

const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Article: {screen: ArticleScreen},
});

export default App;