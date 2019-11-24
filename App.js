import React, { Component } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView, FlatList, SectionList } from 'react-native';
import Greeting from './TestComponents/Greeting'
import InputComponent from './TestComponents/InputComponent'
import ButtonComponent from './TestComponents/ButtonComponent'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isShowingText: true
    }
  }

  componentDidMount() {
    /*setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText
      })
    }, 1000)*/
  }

  /*_onPressButton() {
    Alert.alert('You tapped the button!')
  }*/

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View>
        {/*// flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffff00"*/}
        {/*<View style={{ height: 100, width: 100, backgroundColor: '#000' }} />*/}
        <InputComponent/>

        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

        <FlatList
          data={[
            { key: 1},
            { key: 2},
            { key: 3},
            { key: 4},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        {/*<ScrollView>
          <View>
            <ButtonComponent />
          </View>
          <View>
            <ButtonComponent />
          </View>
        </ScrollView>*/}

        {/*<Button
          onPress={() => Alert.alert('你点击了按钮！')}
          title='点击'
          color='#f0f'
        />

        <View>
          <Button onPress={this._onPressButton} title='press me'/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title='press me' color="#841584"/>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>*/}

        {/*<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#ff0123' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
        </View>*/}

        {/*<View style={styles.blueBox} />*/}
        {/*<View style={{ width: 100, height: 100, backgroundColor: '#0000ff', flex: 1 }} />*/}
        {/*{this.state.isShowingText ? <Greeting name='show'/> : <Text/>}*/}
        {/*<Greeting name='david' />*/}
        {/*<Text style={styles.red}>hello style!!!</Text>*/}
        {/*<Greeting name='johnkuo' />*/}
        {/*<Greeting name={ this.state.isShowingText } />*/}
        {/*<Text>hello world</Text>*/}
        {/*<Image source={ pic } style={{ height:240, width: 300 }}/>*/}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#e0f',
    borderRadius: 10
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  red: {
    color: "#f00",
    fontSize: 50,
  },
  blueBox: {
    width: 200,
    height: 200,
    backgroundColor: '#00ffff'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#f00',
    marginBottom: 10
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
})