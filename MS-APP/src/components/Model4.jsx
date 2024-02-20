// 
import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import Logo from '../assets/download.svg';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Upload4() {
  const [image, setImage] = useState(null);
  const [imageP, setImageP] = useState(null);
  const [imagePm, setImagePm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.canceled) {
      
      const firstSelectedAsset = pickerResult.assets[0];

     
      const selectedUri = firstSelectedAsset.uri;

      setImage(selectedUri);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', {
      uri: image,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await axios.post('http://192.168.57.246:5000/MSPrediction4', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setImageP(response.data.original_image);
      setImagePm(response.data.mask_image);
      setModalVisible(true);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const PredictionModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image source={{ uri: `data:image/jpeg;base64,${imageP}` }} style={{ width: 200, height: 150 }} />
            <View style={{ position: 'absolute', top: 0, left: 0 }}>
              <Image source={{ uri: `data:image/jpeg;base64,${imagePm}` }} style={{ width: 200, height: 150 }} />
            </View>
          </View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.title}>Upload Your Photo for Sgementation</Text>
      <View style={styles.innerContainer}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf: 'center' }} />
        ) : (
          <TouchableOpacity onPress={handleImageUpload} style={{ alignItems: 'center' }}>
            <Logo style={{ width: 150, height: 150 }} />
            <Text style={{ marginTop: 10, fontSize: 16 }}>
              Drag & drop files{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={handleImageUpload}
              >
                Browse
              </Text>
            </Text>
          </TouchableOpacity>
        )}

        <TouchableWithoutFeedback onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Test Now</Text>
          </View>
        </TouchableWithoutFeedback>

        <PredictionModal />

      </View>
    </SafeAreaProvider>
  );
}

export default Upload4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderColor: 'rgba(50, 146, 224, 0.788)',
    borderStyle: 'dotted',
    borderWidth: 1,
    marginTop: -50
  },
  innerContainer: {
    textAlign: 'center',
    height: 200,
    width: 250,
    borderColor: '#001B79',
    borderWidth: 2,
    borderStyle: 'dashed',
    marginHorizontal: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#001B79',
    padding: 10,
    borderRadius: 10,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
