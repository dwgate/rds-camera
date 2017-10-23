import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImagePicker } from 'expo';
import { StackNavigator } from 'react-navigation';

import Home from './Home.js';
import Review from './Review.js';

export default StackNavigator ({
  Home: {
    screen: Home,
  },
  Review: {
    screen: Review,
  }
});