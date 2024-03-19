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
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import background from '../assets/background.webp';

export const SelectionScreen = ({navigation}: {navigation: any}) => {
  const onPressFirstGrade = () => {
    navigation.navigate('FirstGradeScreen');
  };
  const onPressSecondGrade = () => {
    navigation.navigate('SecondGradeScreen');
  };
  const onPressThirdGrade = () => {
    navigation.navigate('ThirdGradeScreen');
  };
  const onPressFourthGrade = () => {
    navigation.navigate('FourthGradeScreen');
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={styles.background}>
      <View style={styles.gradeButtons}>
        <TouchableOpacity style={styles.button} onPress={onPressFirstGrade}>
          <Image
            style={styles.buttonImage}
            source={require('../assets/firstgrade.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressSecondGrade}>
          <Image
            style={styles.buttonImage}
            source={require('../assets/secondgrade.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressThirdGrade}>
          <Image
            style={styles.buttonImage}
            source={require('../assets/thirdgrade.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressFourthGrade}>
          <Image
            style={styles.buttonImage}
            source={require('../assets/fourthgrade.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  gradeButtons: {
    flex: 1,
  },

  button: {
    flex: 1,
    color: 'red',
    alignItems: 'center',
    shadowOpacity: 0.6,
    shadowRadius: 6, // Added for smoother shadow
  },
  buttonImage: {
    // backgroundColor: 'blue',
    height: '100%',
    resizeMode: 'contain',
  },
});
