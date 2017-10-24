import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImagePicker, Screen } from 'expo';
import { Button } from 'react-native-elements'

import Home from './Home.js';

export default class Review extends React.Component {
  static navigationOptions = {
    title: 'Review',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { navigate } = this.props.navigation;
    const home = () => navigate('Home');
    const uri = this.props.navigation.state.params.image.uri;
    
    return (
        <View style={styles.container}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
              resize: 'contain',
              margin: 10,
              backgroundColor: 'red'
            }}
            source={{ uri }}
          />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {},
  camera: {
    color: 'green',
    borderColor: '1px',
    borderRadius: 5,
    borderColor: 'black',
  }
});
