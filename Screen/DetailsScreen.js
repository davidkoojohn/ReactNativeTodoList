import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native'

export default class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('id', 'A Nested Details Screen'),
      headerLeft: () => (
        <View>
          <Image
            source={require('../icon.png')}
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