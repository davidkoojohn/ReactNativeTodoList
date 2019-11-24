import React, {Component} from 'react'
import { View, Text } from 'react-native'


export default class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>hello, { this.props.name }</Text>
      </View>
    )
  }
}

