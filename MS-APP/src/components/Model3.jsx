import React, { useState } from 'react';
import { View, Text, Modal, Image, Button, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import Logo from '../assets/upload.svg';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheet from './BottomSheet';

function UploadImg() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [acc , SetAcc] = useState(null)
  const reff = useRef(null);
  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
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
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await axios.post('http://192.168.1.5:5000/MSPrediction3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.class_label && response.data.image_data && response.data.accuracy) {
        setPrediction(response.data.class_label);
        setImageData(response.data.image_data);
        SetAcc(response.data.accuracy);
        setModalVisible(true);
      } else {
        console.log("sssssssss");
      }

      console.log(acc, prediction, imageData);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    setImage(null)
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
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>Result</Text>
          {(prediction === 'Control-Axial' || prediction === 'Control-Sagittal' || prediction === 'MS-Axial' || prediction === 'MS-Sagittal') && (acc<.90) && (
            <Text style={{ paddingBottom: 10, textAlign: 'center' }}>insert correct image </Text>
          )}
          {(prediction === 'Control-Axial' || prediction === 'Control-Sagittal') && (acc>.90) && (
            <Text style={{ paddingBottom: 10, textAlign: 'center' }}>Prediction: You are Healthy </Text>
          )}
          {(prediction === 'MS-Axial' || prediction === 'MS-Sagittal') && (acc>.90) && (
            <Text style={{ paddingBottom: 10, textAlign: 'center' }}>Prediction: You are infected with MS </Text>
          )}
          <Button title="Close" onPress={() => {
            console.log(acc);
            setModalVisible(false);
          }} />
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaProvider >
      <View style={styles.container}>
      <Text style={styles.title}>Upload Your Photo for detection</Text>
      <View style={styles.innerContainer}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 240, height: 195, alignSelf: 'center' }} />
        ) : (
          <TouchableOpacity onPress={handleImageUpload} style={{ alignItems: 'center' }}>
            <Logo style={{ width: 150, height: 150 , marginTop: 40}} />
            <Text style={{ marginTop: 10, fontSize: 16 }}>
              Drag & drop files{' '}
              <Text style={{ color: '#019874' }} onPress={handleImageUpload}>
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
        <BottomSheet ref={reff}>
            <View style={{ flex: 1, backgroundColor: "whitesmoke" }}>
            <View style={{flex:1 ,top: 20 , position: 'absolute' }}>
            <Text style={{color: 'red' , textAlign: 'center' , fontSize:22 , marginTop:10 , fontWeight: 'bold' }}>Recommendation</Text>
              <Colapse/>
          </View>
          </View>
        </BottomSheet>
      </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: -50,
    backgroundColor: "#cef5eb",
  },
  innerContainer: {
    height: 200,
    borderColor: "#019874",
    borderWidth: 2,
    borderStyle: "dashed",
    marginHorizontal: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#019874",
    padding: 10,
    borderRadius: 10,
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default UploadImg;
