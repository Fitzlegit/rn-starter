import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewBoxOneStyle}>
      </View>
      <View style={styles.viewBoxTwoStyle}>
      </View>
      <View style={styles.viewBoxThreeStyle}>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewBoxOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    width: 50,

  },
  viewBoxTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    height: 50,
    width: 50,
    top: 60,

  },
  viewBoxThreeStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    height: 50,
    width: 50,

  }
});

export default BoxScreen;
