/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Image,
  ScrollView,
  ListView,
  ActivityIndicator
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// 注意，在react-native中不能使用html的标签，比如div/p/span/h1.......，那怎么办？
// 我们只能使用react-native中帮我们封装的组件
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    // 1. 创建一个ListView.DataSource数据源
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // 2. 给数据源传递一个普通的数据数组
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']),
    };
  }
  pressButton = () => {
    console.log('hahah');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Text组件专门用来展示文本 */}
        <Text>hello11</Text>
        <ActivityIndicator />
        <View>
          <Button
            onPress={this.pressButton}
            title="和好"
            color="#841584"
          />
        </View>
        <TextInput keyboardType='phone-pad' maxLength={5} />
        <View style={{ height: 200 }}>
          {/* ScrollView的父容器需要有一个确定的高度 */}
          <ScrollView>
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            <Image source={require('./itcast.png')} style={{ width: 200, height: 100 }} />
            {/* 网络图片需要设置宽和高 */}
            <Image source={{uri: 'http://www.itcast.cn/images/newslide/homepageandphone/20180430090405772.jpg'}} style={{width: 200, height: 100}}/>
          </ScrollView>
        </View>
        <View style={{height: 100}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
      </View>
    );
  }
}

// 注意，通过StyleSheet.create创建的样式，凡是设置宽度大小等，不能加px单位，只能写成数字
// 在react-native中默认flex布局，并且flex-direction默认为column

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
