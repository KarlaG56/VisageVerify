import React from "react";

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    marginTop:50
  },
  text: {
    color: '#6D3296',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',

  },
});


export default Button;