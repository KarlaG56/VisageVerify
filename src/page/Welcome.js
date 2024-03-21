import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from "../components/Button";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Fondo.png')} style={styles.img} />
      <View style={styles.overlay}>
        <Text style={styles.text}>Bienvenido</Text>
        <Text style={styles.subText}>Enciende tu experiencia con VisageVerify</Text>
        <Button title={'Empezar aquí'} onPress={() => console.log('Empezar')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Welcome;
