import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class LogoTitle extends Component {
  render() {
    return (
      <View style={{height: 40, width: 300, backgroundColor: 'red', paddingLeft: 20}}>
        <Image
          source={require('./icon.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      headerTitle: () => <LogoTitle/>,
      headerRight: () => (
        <View style={{backgroundColor: '#0ff'}}>
          <Button
            onPress={navigation.getParam('rightBtnHandle')}
            title="+1"
            color="#fff"
          />
        </View>
      ),
    }
  };

  constructor() {
    super()
    this.state = {
      num: 0
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({
      rightBtnHandle: this._rightBtnHandle
    })
  }

  _rightBtnHandle = () => {
    this.setState({
      num: this.state.num + 1
    })
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
        <View>
          <Text>{ this.state.num }</Text>
        </View>

        <Button
          onPress={() => this.props.navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />

      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('id', 'A Nested Details Screen'),
      // title: navigation.state.params.id,
      headerLeft: () => (
        <View>
          <Image
            source={require('./icon.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
      ),
      headerTintColor: '#f00',
      headerStyle: {
        backgroundColor: '#9e5cf4',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      },
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
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ id: 'Updated!' })}
        />
      </View>
    );
  }
}

class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

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
        // fontSize: 30
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

