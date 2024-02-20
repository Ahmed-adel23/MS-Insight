// import React, { useState } from 'react';
// import { View, Text,Modal, Image, Button, TouchableOpacity,TouchableWithoutFeedback,StyleSheet} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';
// import Logo from '../assets/download.svg'
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// function UploadImg() {
//   const [image, setImage] = useState(null);
//   const [prediction, setPrediction] = useState(null);
//   const[acc , setAcc] = useState(0)
//   const [imageData, setImageData] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const handleImageUpload = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }

//     const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
//     if (!pickerResult.canceled) {
//       setImage(pickerResult.uri);
//     }
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('image', {
//       uri: image,
//       type: 'image/jpeg',
//       name: 'photo.jpg',
//     });

//     try {
//       const response = await axios.post('http://192.168.1.5:5000/MSPrediction3', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
       
//       });

//       console.log(response.data);
//       if (response.data && response.data.class_label && response.data.image_data && response.data.accuracy) {

      
//       await setPrediction(response.data.class_label);
//       await setImageData(response.data.image_data);
//       await setAcc(response.data.accuracy);
//       await setModalVisible(true);
//       }else {
//         console.log("sssssssss")
//       }
//       console.log(acc , prediction , imageData )
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };
//   const PredictionModal = () => (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => setModalVisible(false)}
//     >
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
//         <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 10 }}>
//           <Text style={{ fontSize: 20, marginBottom: 10 , fontWeight: 'bold' , textAlign: 'center' }}>Result</Text>
//           {prediction == "Control-Axial" || prediction== "Control-Sagittal" &&
//           <Text style={{paddingBottom: 10 , textAlign: 'center' }}>Prediction: You are not infected with MS </Text>
//         }
//         <Text style={{paddingBottom: 10 , textAlign: 'center' }}>Prediction: You are not infected with MS {prediction} </Text>
//           {prediction == "MS-Axial" || prediction== "MS-Sagittal" &&
//           <Text style={{paddingBottom: 10 , textAlign: 'center' }}>Prediction: You are infected with MS </Text>
//           }
//           <Button title="Close" onPress={() =>{
//             console.log(prediction)
//             setModalVisible(false)}} />
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <SafeAreaProvider style={styles.container}>
//       <Text style={styles.title}>Upload Your Photo for Model 1</Text>
//     <View style={styles.innerContainer}>
//       {image ? (
//         <Image source={{ uri: image }} style={{ width: 240, height: 195, alignSelf: 'center' }} />
//       ) : (
//         <TouchableOpacity onPress={handleImageUpload} style={{ alignItems: 'center' }}>
//           <Logo style={{ width: 150, height: 150 }} />
//           <Text style={{ marginTop: 10, fontSize: 16 }}>
//               Drag & drop files{' '}
//               <Text
//                 style={{ color: 'blue' }}
//                 onPress={handleImageUpload}
//               >
//                 Browse
//               </Text>
//             </Text>
//         </TouchableOpacity>
//       )}

//       <TouchableWithoutFeedback onPress={handleSubmit}>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>Test Now</Text>
//       </View>
//     </TouchableWithoutFeedback>
//     {/* {prediction && acc >= .85 && */}
//     <PredictionModal />
//     {/* } */}
//     {/* {prediction && acc < .85 && */}
//     {/* alert("please upload correct MRI image") */}
    
//     {/* } */}
//     </View>
//     </SafeAreaProvider>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     borderColor: 'rgba(50, 146, 224, 0.788)' ,
//     borderStyle: 'dotted' ,
//     borderWidth: 1 ,
//     marginTop: -50


//   },
//   innerContainer: {
//     textAlign: 'center',
//      height: 200 ,
//       width: 250 ,
//        borderColor: '#001B79',
//         borderWidth: 2, 
//         borderStyle: 'dashed', 
//         marginHorizontal: 40 , 
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#001B79',
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20 
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//   },

// }); 

// export default UploadImg;
import React, { useState } from 'react';
import { View, Text, Modal, Image, Button, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import Logo from '../assets/download.svg';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function UploadImg() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [acc , SetAcc] = useState(null)

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
      const response = await axios.post('http://192.168.57.246:5000/MSPrediction3', formData, {
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
          {(prediction === 'Control-Axial' || prediction === 'Control-Sagittal') && (
            <Text style={{ paddingBottom: 10, textAlign: 'center' }}>Prediction: You are not infected with MS </Text>
          )}
          {(prediction === 'MS-Axial' || prediction === 'MS-Sagittal') && (
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
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.title}>Upload Your Photo for detection</Text>
      <View style={styles.innerContainer}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 240, height: 195, alignSelf: 'center' }} />
        ) : (
          <TouchableOpacity onPress={handleImageUpload} style={{ alignItems: 'center' }}>
            <Logo style={{ width: 150, height: 150 }} />
            <Text style={{ marginTop: 10, fontSize: 16 }}>
              Drag & drop files{' '}
              <Text style={{ color: 'blue' }} onPress={handleImageUpload}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderColor: 'rgba(50, 146, 224, 0.788)',
    borderStyle: 'dotted',
    borderWidth: 1,
    marginTop: -50,
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
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default UploadImg;
