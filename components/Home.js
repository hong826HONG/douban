import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux'

export default class Home extends Component {
  // 这里第二个参数只能叫title，因为在Scene组件中，就是title属性控制上面的显示的文字的，我们这里传title只是去覆盖掉Scene中的title
  jumpTo = (movieType, title) => {
    Actions.movielist({movieType, title});
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Image source={{ uri: 'http://www.itcast.cn/images/newslide/homepageandphone/20184328094318756.jpg' }} style={{height: 300, width: '100%'}}></Image>
          </View>
          <View style={styles.slide2}>
          <Image source={{ uri: 'http://www.itcast.cn/images/newslide/homepageandphone/20184328094318756.jpg' }} style={{height: 300, width: '100%'}}></Image>
          </View>
          <View style={styles.slide3}>
          <Image source={{ uri: 'http://www.itcast.cn/images/newslide/homepageandphone/20184328094318756.jpg' }} style={{height: 300, width: '100%'}}></Image>
          </View>
        </Swiper>
        <View style={{height: 200, display: 'flex', justifyContent: 'space-around', paddingLeft: 80, paddingRight: 80}}>
          <Button title='正在热映' onPress={() => this.jumpTo('in_theaters', '正在热映')}></Button>
          <Button title='即将上映' onPress={() => this.jumpTo('coming_soon', '即将上映')}></Button>
          <Button title='Top250' onPress={() => this.jumpTo('top250', 'Top250')}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})