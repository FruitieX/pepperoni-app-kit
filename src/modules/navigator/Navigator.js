import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import {Header} from 'react-navigation-native-base';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: ColorViewContainer}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  },
  header: {
    style: {
      elevation: 0
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Pepperoni',
  header: {
    style: {
      elevation: 0 // disable elevation when TabNavigator visible
    }
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  InfiniteColorStack: {screen: ColorViewContainer}
}, {
  headerComponent: Header
});

export default AppNavigator;
