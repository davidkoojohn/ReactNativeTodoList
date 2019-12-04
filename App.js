import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    console.log('home componentDidMount')
  }
  componentWillUnmount() {
    console.log('home Unmount')
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <Text style={{backgroundColor: '#0f0', color: '#f0f'}}>Home Screen</Text>
        <Button
          title='Go to details'
          onPress={() => {
            this.props.navigation.navigate('Details', {
              id: '3456789',
              info: 'from to home'
            })
          }}
        />

      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('id', 'A Nested Details Screen'),
    };
  }

  componentDidMount(){
    console.log(this.props.navigation.getParam('id', 'info'))
    console.log('details componentDidMount')
  }

  componentWillUnmount() {
    console.log('details Unmount')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: '#00f'}}>Details Screen</Text>
        <Button
          title="back home"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Details... again"
          onPress={() => {
            this.props.navigation.push('Details', {
              id: 'hahaha'
            })
          }}
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

