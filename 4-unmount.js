// https://snack.expo.io/@veravovk/todoapp
import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 54,
  }
})

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(this.inc, 500)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  inc = () => {
    console.log('increment!')
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <Text style={styles.count}>{this.state.count} </Text>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true,
    }
  }
  
  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter,
  }))


  render() {
    return (
      <View style={styles.appContainer}>
        <Button title="toggle" onPress={this.toggleCounter} />
        {this.state.showCounter && <Counter />}
      </View>
    )
  }
}
