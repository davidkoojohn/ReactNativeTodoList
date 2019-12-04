import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <Text style={{backgroundColor: '#0f0', color: '#f0f'}}>Home Screen</Text>
        <Button
          title='Go to details'
          onPress={() => this.props.navigation.navigate('Details')}
        />

      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: '#00f'}}>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  /*Home: {
    screen: HomeScreen,
  },*/
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

