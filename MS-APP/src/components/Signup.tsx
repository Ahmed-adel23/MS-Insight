import React, { useState , useRef , useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
const backImage = require("../../assets/3d-render-medical-background-with-brain-being-attacked-by-virus-cells.jpg");
import Toast from './Toast';
import { BackHandler } from "react-native";
import Icon from '../assets/svg/google.svg'

export default function Signup({ navigation }) {
  const toastRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() =>{ 
          toastRef.current.show({
            type: 'success',
            text: 'Signup successful',
            duration: 2000,
          });
          setTimeout(() => {
          navigation.navigate("LogIn")
        }, 3000); 

      })
        .catch((err) => {
          toastRef.current.show({
            type: 'warning',
            text: 'something went wrong try again',
            duration: 2000,
          });
        });
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
      <Toast ref={toastRef} />
        <Text style={styles.title}>Sign Up</Text>
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
      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign Up</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Text style={{color: '#001B79', fontWeight: '600', fontSize: 14}}> Log In</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#001B79",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#001B79',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  lineBreak: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginHorizontal:20,
    marginTop: 10
  },
  googleButtonText: {
    color: 'white',
    fontSize:18 ,
        marginHorizontal: 10
  },
  icon:{
    height:30,
    width: 30,
  }
});