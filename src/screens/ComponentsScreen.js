import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// arrow function
const ComponentsScreen = () => {
  const userName = 'Jacob';

  // Primative react element
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.nameStyle}>My name is {userName}</Text>
    </View>
  );
};

// Styles sheet object for textStyle
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameStyle: {
    fontSize: 20
  }
});

// allows access to component from components
export default ComponentsScreen;
