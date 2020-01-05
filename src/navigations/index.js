import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../scenes/HomeScreen';
import VideoScreen from '../scenes/VideoScreen';
import ImageScreen from '../scenes/ImageScreen';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ImageScreen: ImageScreen,
    VideoScreen: VideoScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
