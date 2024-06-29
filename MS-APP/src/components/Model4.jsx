import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import Logo from "../assets/upload.svg";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Upload4() {
  const [image, setImage] = useState(null);
  const [imageP, setImageP] = useState(null);
  const [imagePm, setImagePm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
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
    formData.append("file", {
      uri: image,
      type: "image/jpeg",
      name: "photo.jpg",
    });

    try {
      const response = await axios.post(
        "http://192.168.1.5:5000/MSPrediction4",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setImageP(response.data.original_image);
      setImagePm(response.data.mask_image);
      setModalVisible(true);
    } catch (error) {
      console.error("Error uploading image:", error);
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
          style={{ backgroundColor: "white", padding: 55, marginTop: 70 , borderRadius: 10 , width: 310, height: 250  }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-around", marginBottom:15 , marginTop: -30 }}
          >
            <Image
              source={{ uri: `data:image/jpeg;base64,${imageP}` }}
              style={{ width: 200, height: 150 }}
            />
            <View style={{ position: "absolute", top: 0, left: 0 }}>
              <Image
                source={{ uri: `data:image/jpeg;base64,${imagePm}` }}
                style={{ width: 200, height: 150 }}
              />
            </View>
          </View>
          <Button color={"#019874"}  title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Upload Your Photo for Sgementation</Text>
        <View style={styles.innerContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 310, height: 195, alignSelf: "center" }}
            />
          ) : (
            <TouchableOpacity
              onPress={handleImageUpload}
              style={{ alignItems: "center" }}
            >
              <Logo style={{ width: 150, height: 150, marginTop: 40 }} />
              <Text style={{ marginTop: 10, fontSize: 16 }}>
                Drag & drop files{" "}
                <Text style={{ color: "#019874" }} onPress={handleImageUpload}>
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
      </View>
    </SafeAreaProvider>
  );
}

export default Upload4;

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
