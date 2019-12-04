import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2019",
    posters: { thumbnail: "https://www.baidu.com/img/bd_logo1.png" }
  }
];

export default class MovieList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { movie } = this.props

    return (
      <View style={styles.item}>
        <Image style={styles.poster} source={{
          uri: movie.posters.thumbnail || MOCKED_MOVIES_DATA[0].posters.thumbnail
        }}/>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
          <Text style={styles.desc}>{movie.year}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: '#eee'
  },
  content: {
    flex: 1,
    paddingLeft: 10
  },
  title: {
    fontSize: 30,
    color: '#333',
    lineHeight: 60,
  },
  desc: {
    lineHeight: 40,
    fontSize: 20,
    color: '#666'
  }
})