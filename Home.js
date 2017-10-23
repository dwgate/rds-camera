import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

import Review from './Review.js';

// export default class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: false,
//     }
//     this.takePhoto = this.takePhoto.bind(this);
//   }

//   takePhoto() {
//     this.props.navigate('REVIEW');
//     this.props.x();
//     // ImagePicker.launchCameraAsync();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Welcome to photo preview app land!
//         </Text>
//         <Button
//           buttonStyle={styles.camera}
//           title="Take Photo"
//           onPress={this.takePhoto}
//         /> 
//       </View>
//     );
//   }
// }

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };


  render() {
    const { navigate } = this.props.navigation;
    const review = () => navigate('Review');
    return (
      <View style={styles.container}>
        <Text>
          Welcome to photo preview app land!
        </Text>
        <Button
          buttonStyle={styles.camera}
          title="Take Photo"
          onPress={review}
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

