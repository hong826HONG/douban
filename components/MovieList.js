import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';

import MovieBox from './MovieBox'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // 这里我们将电影的类型，当前的页码，每页多少条数据保存在state中
      type: this.props.movieType,
      currentPage: 1,
      // count表示每页多少条
      count: 12,
      totalPage: 0,
      movieList: [],
      loading: true,
      ds
    }
  }
  getList = () => {
    let start = (this.state.currentPage - 1) * this.state.count
    let url = `https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.count}`
    // 注意在这里发请求的时候，我们不需要使用fetch-jsonp，因为我们没有在浏览器环境中，不受同源策略的限制
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          loading: false,
          totalPage: Math.floor(res.total / this.state.count),
          movieList: this.state.movieList.concat(res.subjects)
        }, () => {
          this.setState({
            ds: this.state.ds.cloneWithRows(this.state.movieList)
          })
        })
      })
  }
  loadNewPage = () => {
    // 每次下拉记载新数据的时候，都要去判断当前页面页码有没有大于总页码，如果大于，就直接return
    if (this.state.currentPage > this.state.totalPage) {
      return;
    }
    this.setState({
      currentPage: ++this.state.currentPage
    }, () => {
      this.getList()
    })
  }
  componentWillMount() {
    this.getList()
  }
  render() {
    return (
      <View>
        {
          this.state.loading
            ? <ActivityIndicator size='large'></ActivityIndicator>
            : <ListView
              dataSource={this.state.ds}
              renderRow={(rowData) => <MovieBox {...rowData}></MovieBox>}
              onEndReachedThreshold={50}
              onEndReached={this.loadNewPage}
              >

            </ListView>
        }
      </View>
    )
  }
}