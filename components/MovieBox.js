import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


import {Actions} from 'react-native-router-flux'
export default class MovieBox extends Component {
  jumpToDetail = (id, title) => {
    Actions.moviedetail({id, title})
  }
  render() {
    return (
      <TouchableHighlight activeOpacity={0.5} underlayColor='#EEEFF2' onPress={ () => this.jumpToDetail(this.props.id, this.props.title)}>
        <View style={{ flexDirection: 'row', padding: 10, borderBottomColor: '#ccc', borderWidth: 1 }}>
          <Image source={{ uri: this.props.images.medium }} style={{width:100, height: 140, marginRight: 10}}></Image>
          <View style={{justifyContent: 'space-between'}}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>电影名称：</Text>
              {this.props.title}
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold'}}>电影类型：</Text>
              {this.props.genres.join(',')}
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold'}}>上映年份：</Text>
              {this.props.year}
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold'}}>电影评分：</Text>
              {this.props.rating.average}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}