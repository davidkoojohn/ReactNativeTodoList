import React, {Component} from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Screen/HomeScreen'
import DetailsScreen from './Screen/DetailsScreen'
import ModalScreen from './Screen/Modal/ModalScreen'
import LogoTitleComponent from './Components/LogoTitleComponent'


const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#20a2f7',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer

