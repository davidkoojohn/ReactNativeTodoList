
import React ,{Component} from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default class InputComponent extends Component {
  constructor() {
    super()
    this.state = {
      text: '123'
    }
  }

  render() {
    return(
      <View style={{paddingTop: 100, padding: 10}}>
        <TextInput
          style={{ height: 50, backgroundColor: '#f00' }}
          placeholder='please enter text'
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <View>
          <Text>{ this.state.text.split(' ').map(item => item && '👌').join(' ')  }</Text>
        </View>
      </View>
    )
  }
}
