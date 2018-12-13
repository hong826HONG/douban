/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import MovieList from './components/MovieList'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component {

  render() {
    // Router能够让我们的整个应用程序拥有路由
    return (
      <Router>
        <Scene key="root">
          {/* Scene是一个场景，专门用来渲染组件的，每个场景都必须有一个key，这个key是唯一标识场景用的。
          将来我们这些key都会保存在Actions中，然后我们可以通过Actions.key()跳转到相应的key对应的场景去 */}
          <Scene key="home" component={Home} hideNavBar={true}/>
          <Scene key="movielist" component={MovieList} title="电影列表"/>
          <Scene key="moviedetail" component={MovieDetail} title="电影详情"/>
        </Scene>
    	</Router>
    );
  }
}

const styles = StyleSheet.create({

});
