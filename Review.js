import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Button } from 'react-native-elements'

import Home from './Home.js';

export default class Review extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { navigate } = this.props.navigation;
    const home = () => navigate('Home');

    return (
      <View style={styles.container}>
        <Text> pic </Text>
        <Button
          title="Start Over"
          onPress={home}
        />
        <Button
          title="Save"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

