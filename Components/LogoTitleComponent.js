import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native'

export default class LogoTitleComponent extends Component {
  render() {
    return (
      <View style={{height: 40, width: 300, backgroundColor: 'red', paddingLeft: 20}}>
        <Image
          source={require('../icon.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
    );
  }
}