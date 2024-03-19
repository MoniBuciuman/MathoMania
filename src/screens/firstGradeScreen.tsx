import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import background from '../assets/backgroundFirstgrade.webp';
import {generateEquation} from '../utils/random';

export const FirstGradeScreen = () => {
  const [equation, setEquation] = useState('');
  const [truthValue, setTruthValue] = useState(true);

  useEffect(() => {
    const {eq, newTruthValue} = generateEquation();
    setEquation(eq);
    setTruthValue(newTruthValue);
  }, []);

  const handleAnswer = (userAnswer: boolean) => {
    if (truthValue === userAnswer) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
    const {eq, newTruthValue} = generateEquation();
    setEquation(eq);
    setTruthValue(newTruthValue);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={background}
      style={styles.background}>
      <View style={styles.mathProblemContainer}>
        <Text style={styles.mathProblemText}>{equation}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(true)}>
          <Text style={styles.buttonText}>TRUE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(false)}>
          <Text style={styles.buttonText}>FALSE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// Styles remain unchanged

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mathProblemContainer: {
    margin: 20,
    padding: 10,
    // Add more styling relevant to your design
  },
  mathProblemText: {
    fontSize: 50,
    fontWeight: 'bold',
    // Add more styling relevant to your design
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#ADD8E6', // You will set your own color
    padding: 20,
    borderRadius: 20,
    // Add more styling relevant to your design
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    // Add more styling relevant to your design
  },
});
