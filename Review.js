import React from 'react';
import { CameraRoll, StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements'

import Home from './Home.js';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.savePhoto = this.savePhoto.bind(this);
  }

  static navigationOptions = {
    title: 'Review',
    header: null,
  };

  savePhoto() {
    const uri = this.props.navigation.state.params.uri;
    CameraRoll.saveToCameraRoll(uri);
  }

  render() {
    const { navigate } = this.props.navigation;
    const home = () => navigate('Home');
    const uri = this.props.navigation.state.params.uri;
    
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri }}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Return"
            onPress={home}
            style={styles.home}
            backgroundColor='#AA5439'
            raised
            borderRadius={4}
          />
          <Button
            title="Keep"
            onPress={this.savePhoto}
            style={styles.save}
            backgroundColor='#679933'
            raised
            borderRadius={4}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28536C',
  },
  image: {
    flex: 6,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    margin: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#6F8FA2',
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 30,
  },
  home: {
    width: 100,
  },
  save: {
    width: 100,
  },
});
