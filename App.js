import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native'

import MovieList from './TestComponents/MovieList'

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
              ? this.state.movies.map((item, index) => <MovieList movie={item} key={index}/> )
              : <Text>loading....</Text>}
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})
