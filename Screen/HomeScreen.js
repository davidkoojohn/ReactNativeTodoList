import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
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