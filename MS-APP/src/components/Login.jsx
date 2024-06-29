import React, { useState  , useRef , useEffect } from "react";
import { StyleSheet, Text, View,  TextInput,  SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Toast from './Toast';
import { BackHandler } from "react-native";
import IMG from '../assets/Vector.svg';
import IMGL from '../assets/undraw_my_app_grf2 (1) 1.svg';
import IMGhead from '../assets/Figmania - Playground (Community) (Copy) (1).svg';

export default function Login({ navigation }) {
  const toastRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleBackButton = () => true;
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
        BackHandler.removeEventListener(
            "hardwareBackPress",
            handleBackButton
        );
    };
}, []);

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toastRef.current.show({
              type: 'success',
              text: 'Login successful',
              duration: 2000,
            });  
            setTimeout(() => {
            navigation.navigate("HomePage"); 
          }, 2100); 
        })
        .catch((err) => {
          toastRef.current.show({
            type: 'error',
            text: 'invaild email or password',
            duration: 2000,
          });

        });
    }
    else{
      toastRef.current.show({
        type: 'warning',
        text: 'fill up email and password',
        duration: 2000,
      });

    }
  };

  return (
    <View style={styles.container}>
      <IMG  style={styles.backImage} />
      <Text style={styles.head}> MS Detector </Text>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Welcome Back!</Text>
        <IMGL />
        <View>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text style={{ color: 'red', fontWeight: '300', fontSize: 12 , padding: 15 , marginTop: -38, textAlign: 'right' }}>Do You Forget Password?</Text>
          </TouchableOpacity>

        </View>
        <View>
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Log In</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: '#000', fontWeight: '400', fontSize: 12 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: 'red', fontWeight: '300', fontSize: 12 }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        </View>
        <Toast ref={toastRef} />
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#019874",
    alignSelf: "center",
    paddingBottom: 24,
  },
  Imagehead: {
    position: 'absolute',
    top: 0 ,
    right: 0 ,
    zIndex: 5 , 
    width: 30,
    height: 30
  },
  head: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#019874",
    marginTop: 10,
    marginLeft: 60,
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 30,
    fontSize: 16,
    borderRadius: 20,
    padding: 15,
  },
  backImage: {
    position: 'absolute',
    top: 10 ,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  whiteSheet: {
    width: '100%',
    height: '90%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#C4C4C48A',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 35,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#019874',
    height: 58,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
