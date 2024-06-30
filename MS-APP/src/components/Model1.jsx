import React, { useState, useRef, useCallback } from "react";
  import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
  } from "react-native";
  import * as DocumentPicker from "expo-document-picker";
  import { SafeAreaProvider } from "react-native-safe-area-context";
  import axios from "axios";
  import BottomSheet from "./BottomSheet";
  import Img from "../assets/upload.svg";
  import Colapse from '../components/Colapse'
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
  function Upload2() {
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const reff = useRef(null);

    const onPress = useCallback(() => {
      setModalVisible(false);
      const isActive = reff?.current?.isActive();
      if (isActive) {
        reff?.current?.scrollTo(0);
      } else {
        reff?.current?.scrollTo(-200);
      }
    }, []);

    const handleImageUpload = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync();

        if (result) {
          setFile(result);
          console.log(result);
        } else {
          console.warn("No file selected for upload");
        }
      } catch (error) {
        console.error("Error picking document:", error.message);
        setError("Error picking document. Please try again.");
      }
    };

    const handleSubmit = async () => {
      if (file) {
        const formData = new FormData();
        formData.append("file", {
          uri: file.assets[0].uri,
          type: "text/comma-separated-values",
          name: file.assets[0].name,
        });

        try {
          const response = await axios.post(
            "http://192.168.1.5:5000/MSPrediction",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (response.status === 200) {
            console.log(response.data);
            setPrediction(response.data.data);
            setModalVisible(true);
          } else {
            console.error("Error uploading file:", response.statusText);
            setError("Error uploading file. Please try again.");
          }
        } catch (error) {
          console.error("Error uploading file:", error.message);
          setError("Error uploading file. Please try again.");
        }
      } else {
        console.error("No file selected for upload.");
        setError("No file selected for upload.");
      }
      setFile(null)
    };

    const PredictionModal = () => (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
            style={{ backgroundColor: "white", padding: 40, borderRadius: 10 }}
          >
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Result
            </Text>
            <Text
              style={{ paddingBottom: 10, textAlign: "center", fontSize: 16 }}
            >
              Prediction: <Text>{prediction}</Text>{" "}
            </Text>
            {prediction === "You are infected with MS" && (
              <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.button1}>
                  <Text style={styles.buttonText1}>Recommendations</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={{ ...styles.button1, backgroundColor: "red" }}>
                <Text style={styles.buttonText1}>Close</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    );

    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, justifyContent: "center", marginTop: -50 , backgroundColor: '#cef5eb' }}>
          <Text style={{ textAlign: "center", fontSize: 18, margin: 10 }}>
            Upload Your file for MS Testing
          </Text>
          <View
            style={{
              height: 200,
              borderColor: "#019874",
              borderWidth: 2,
              borderStyle: "dashed",
              marginHorizontal: 40,
            }}
          >
            {file?( <FontAwesome5 style={{ marginTop: 20  , textAlign: "center" }} name="file-csv" size={110} color="black" />) :
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={handleImageUpload}
            >
              <Img style={{ marginTop: 40 }} />
              <Text style={{ marginTop: 10, fontSize: 16 }}>
                Drag & drop files{" "}
                <Text style={{ color: "#019874" }} onPress={handleImageUpload}>
                  Browse
                </Text>
              </Text>
            </TouchableOpacity>
  }
          </View>
          {file?( <Text style={{ color: "black", opacity: 0.7, textAlign: "center" ,marginTop: -35 }}>{file.assets[0].name}</Text>) :
          <Text style={{ color: "black", opacity: 0.7, textAlign: "center" ,marginTop: -35 }}>
            Supported formats: CSV
          </Text>
           }
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#019874",
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 40
  },
  button1: {
    backgroundColor: "#019874",
    padding: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  buttonText1: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
export default Upload2;
