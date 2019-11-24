import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native'

const MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2019",
    posters: { thumbnail: "https://www.baidu.com/img/bd_logo1.png" }
  }
];

const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const movies = await this.fetchMovies()
    this.setState({
      movies
    })
  }

  async fetchMovies() {
    try {
      let response = await fetch(REQUEST_URL);
      let responseJson = await response.json();
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {this.state.movies.length > 0
              ? this.state.movies.map((item) => this.renderMovie(item) )
              : <Text>loading....</Text>}
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }

  renderMovie(item) {
    return (
      <View style={styles.item}>
        <Image style={styles.poster} source={{uri: MOCKED_MOVIES_DATA[0].posters.thumbnail}}/>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.year}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  item: {
    borderBottomWidth: 1,
    borderColor: '#efefef',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  poster: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 5,
    backgroundColor: '#f00'
  },
  content: {
    paddingLeft: 10
  },
  title: {
    fontSize: 30,
    color: '#333',
    lineHeight: 60
  },
  desc: {
    lineHeight: 40,
    fontSize: 20,
    color: '#666'
  }
})
