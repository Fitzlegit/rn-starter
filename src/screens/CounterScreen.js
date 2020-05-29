import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const INCREMENT = 1

const reducer = (state, action) => {
  switch(action.type) {
    case 'increase':
      return {...state, counter: state.counter + action.payload };
    case 'decrease':
      return {...state, counter: state.counter - action.payload };
    default:
      return;
  }
}


const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const { counter } = state;
  return (
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({ type: 'increase', payload: INCREMENT });
      }}/>
      <Button title="Decrease" onPress={() => {
        dispatch({ type: 'decrease', payload: INCREMENT });
      }} />
    <Text>Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
