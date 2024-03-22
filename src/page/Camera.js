import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Camera } from 'expo-camera';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');

const Camara = () => {
  const navigation = useNavigation();

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front); // Tipo de cámara: front (frontal)
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No se puede acceder a la cámara.</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camarast}
        type={type}
        ref={cameraRef}
      />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Home')} >
          <AntDesign name="close" size={34} color="white" />

        </TouchableOpacity>

      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.txt} >Karla</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camarast: {
    width: width * 1,
    height: height * 0.69,
    borderRadius: 15,
    overflow: 'hidden',
  },

  close: {
    width:'90%',
    justifyContent:'center',
    marginLeft:10
  },

  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '17%',
    width:'100%',
    backgroundColor: 'black',
    zIndex: 1,
    justifyContent:'center',
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 68,
    backgroundColor: 'black',
    zIndex: 1,
  },
  txt: {
    color: 'white'
  }
});

export default Camara;
