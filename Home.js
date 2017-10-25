import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

import Review from './Review.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: null
    }

    this.takePhoto = this.takePhoto.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  takePhoto() {
    const { navigate } = this.props.navigation;
    const review = () => navigate('Review', { uri: this.state.uri });
    
    const snap = new Promise((resolve) => {
      resolve(ImagePicker.launchCameraAsync());
    });

    snap
    .then(({ uri }) => {
      this.setState({ uri });
      review();
    });
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          RDS Challenge
        </Text>
        <Button
          buttonStyle={styles.camera}
          title="Take Photo"
          onPress={this.takePhoto}
          color='black'
          raised
          borderRadius={3}
          backgroundColor='#679933'
        /> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#28536C',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  camera: {
    borderWidth: 1,
    borderColor: '#C0E699',
  },
  title: {
    fontSize: 25,
    letterSpacing: 2,
  }
});
