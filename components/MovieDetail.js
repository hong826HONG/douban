import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      movieDetail: {}
    }
  }
  componentWillMount() {
    let url = `https://api.douban.com/v2/movie/subject/${this.props.id}`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movieDetail: res,
          loading: false
        })
      })
  }
  render() {
    return (
      <View>
        {
          this.state.loading
            ? <ActivityIndicator size='large'></ActivityIndicator>
            : <ScrollView>
              <View style={{alignItems: 'center', marginTop: 20}}>
                  <Image source={{ uri: this.state.movieDetail.images.large }} style={{width: 200, height: 250}}></Image>
              </View>
              <Text style={{lineHeight: 30}}>{this.state.movieDetail.summary}</Text>
              </ScrollView>
        }
      </View>
    )
  }
}