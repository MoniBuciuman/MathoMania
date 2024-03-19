/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/homeScreen';
import {SelectionScreen} from './src/screens/selectionScreen';
import {FirstGradeScreen} from './src/screens/firstGradeScreen';
import {SecondGradeScreen} from './src/screens/secondGradeScreem';
import {ThirdGradeScreen} from './src/screens/thirdGradeScreen';
import {FourthGradeScreen} from './src/screens/fourthGradeScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
        <Stack.Screen name="FirstGradeScreen" component={FirstGradeScreen} />
        <Stack.Screen name="SecondGradeScreen" component={SecondGradeScreen} />
        <Stack.Screen name="ThirdGradeScreen" component={ThirdGradeScreen} />
        <Stack.Screen name="FourthGradeScreen" component={FourthGradeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
