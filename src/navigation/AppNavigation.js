import Home from '../screens/Home/Home';
import MovieDetails from '../screens/MovieDetails/MovieDetails';
import Search from '../screens/Search/Search';
import Splash from '../screens/Splash/Splash';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const APP_STACK = createStackNavigator(
   {
      home: { screen: Home },
      search: { screen: Search },
      movieDetails: { screen: MovieDetails },
   },
   {
      initialRouteName: 'home',
      headerMode: 'none',
      navigationOptions: {
         headerVisible: false,
      },
   }
);

const APP_Switch = createSwitchNavigator(
   {
      splash: Splash,
      appStack: APP_STACK,
   },
   {
      initialRouteName: 'splash',
   }
);

const AppNavigator = createAppContainer(APP_Switch);
export default AppNavigator;
