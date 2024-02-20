import React, { useState , useRef , useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetRefProps } from "./BottomSheet";
import Img from "../assets/download.svg";

function Upload1() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const reff = useRef < BottomSheetRefProps>(null);

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

      if (result.type === "success") {
        setFile(result);
        console.log(result);
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
        uri: file.uri,
        type: "text/csv",
        name: file.name,
      });

      try {
        const response = await fetch("http://192.168.57.246:5000/MSPrediction2", {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setPrediction(responseData.prediction_results);
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
      <View style={{ flex: 1, justifyContent: "center", marginTop: -50 }}>
        <Text style={{ textAlign: "center", fontSize: 18, margin: 10 }}>
          Upload Your file for MS Testing
        </Text>
        <View
          style={{
            height: 200,
            borderColor: "#001B79",
            borderWidth: 2,
            borderStyle: "dashed",
            marginHorizontal: 40,
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={handleImageUpload}
          >
            <Img style={{ width: 100, height: 100, marginTop: 20 }} />
            <Text style={{ marginTop: 10, fontSize: 16 }}>
              Drag & drop files{" "}
              <Text style={{ color: "blue" }} onPress={handleImageUpload}>
                Browse
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "white", opacity: 0.5, textAlign: "center" }}>
          Supported formats: CSV
        </Text>
        <TouchableWithoutFeedback onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Test Now</Text>
          </View>
        </TouchableWithoutFeedback>
        <PredictionModal />
        <BottomSheet ref={reff}>
          <View style={{ flex: 1, backgroundColor: "whitesmoke" }}>
            {/* <View style={{flex:1 ,top: 50 , position: 'absolute' ,  backgroundColor: "yellow"}}> */}
            {/* <Text style={{color: 'red' , textAlign: 'center' , fontSize:22 , marginTop:10 , fontWeight: 'bold' }}>Recommendation</Text>
              <View style={{ flex:1 , flexDirection: 'row', height: 150 , padding:10 , marginTop: 10 , backgroundColor: 'blue', borderRadius: 20 , marginHorizontal: 10 }}>
                <Text style={{width: 80 , height:80 , borderRadius: 50 , backgroundColor: 'red'}}>first</Text>
                <Text style={{width: 250 , height:160 , borderRadius: 50 , backgroundColor: 'yellow'}}>first</Text>
              </View> */}
          </View>
        </BottomSheet>
      </View>
    </SafeAreaProvider>
  );
}

export default Upload1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#001B79",
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: "#001B79",
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
