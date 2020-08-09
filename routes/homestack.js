import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home.js';
import Details from '../screens/reviewdetails.js';
import Favourites from '../screens/favourites.js';
const screens= {
    Home: {
        screen: Home
    },
   Details: {
       screen:Details
   
   },
   Favourites: {
    screen:Favourites
   }

}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
