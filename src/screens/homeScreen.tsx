/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import background from '../assets/background.webp';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const onPress = () => navigation.navigate('SelectionScreen');

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.background}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.shadow}>
            <Image
              style={styles.buttonImage}
              source={require('../assets/button.png')}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  shadow: {
    borderColor: '#72E1D8', // Light border for some depth
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F0C7E5', // Shadow with a touch of pastel
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 4, // Added for smoother shadow
    elevation: 10, // For Android shadow
  },
  buttonImage: {
    resizeMode: 'contain',
    height: 300, // Ensure this matches the outer View for proper alignment
  },
});
