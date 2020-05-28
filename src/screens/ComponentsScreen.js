import React from 'react';
import { Text, StyleSheet } from 'react-native';

// arrow function
const ComponentScreen = () => {

  // Primative
  return <Text style={styles.textStyle}> This is the components screen</Text>

};

// Styles sheet for textStyle
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

// allows access to component from components
export default ComponentsScreen;
