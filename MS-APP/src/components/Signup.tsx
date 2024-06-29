// import React, { useState , useRef , useEffect } from 'react';
// import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, database } from '../../config/firebase';
// const backImage = require("../../assets/3d-render-medical-background-with-brain-being-attacked-by-virus-cells.jpg");
// import Toast from './Toast';
// import { BackHandler } from "react-native";
// import IMG from '../assets/Vector.svg';
// import { Firestore } from 'firebase/firestore';
// export default function Signup({ navigation }) {
//   const toastRef = useRef();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const[first, setFirst]= useState('')
//   useEffect(() => {
//     const handleBackButton = () => true;
//     BackHandler.addEventListener("hardwareBackPress", handleBackButton);
//     return () => {
//         BackHandler.removeEventListener(
//             "hardwareBackPress",
//             handleBackButton
//         );
//     };
// }, []);
// const onHandleSignup = () => {
//     if (email !== '' && password !== '') {
//   createUserWithEmailAndPassword(auth, email, password)
//         .then(() =>{ 
//           toastRef.current.show({
//             type: 'success',
//             text: 'Signup successful',
//             duration: 2000,
//           });
//           setTimeout(() => {
//           navigation.navigate("LogIn")
//         }, 3000); 

//       })
//         .catch((err) => {
//           toastRef.current.show({
//             type: 'warning',
//             text: 'something went wrong try again',
//             duration: 2000,
//           });
//         });
//     }
//   };
  
//   return (
//     <View style={styles.container}>
//       <IMG  style={styles.backImage} />
//       <Text style={styles.head}> MS Insight </Text>
//       <View style={styles.whiteSheet} />
//       <SafeAreaView style={styles.form}>
//       <Toast ref={toastRef} />
//         <Text style={styles.title}>Register With Us!</Text>
//         <View>
//          <TextInput
//         style={styles.input}
//         placeholder="Enter Your FirstName"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         autoFocus={true}
//         onChangeText={(text) => setFirst(text)}
//       />
//          <TextInput
//         style={styles.input}
//         placeholder="Enter Your LastName"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         autoFocus={true}    
//       />
//          <TextInput
//         style={styles.input}
//         placeholder="Enter Your Email"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         autoFocus={true}
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Your Password"
//         autoCapitalize="none"
//         autoCorrect={false}
//         secureTextEntry={true}
//         textContentType="password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
//         <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign Up</Text>
//       </TouchableOpacity>
//       <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
//         <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
//           <Text style={{ color: 'red', fontWeight: '300', fontSize: 12 }}> Log In</Text>
//         </TouchableOpacity>
//       </View>
//       </SafeAreaView>
//       <StatusBar barStyle="light-content" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: "#019874",
//     alignSelf: "center",
//     paddingBottom: 24,
//   },
//   Imagehead: {
//     position: 'absolute',
//     top: 0 ,
//     right: 0 ,
//     zIndex: 5 , 
//     width: 30,
//     height: 30
//   },
//   head: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: "#019874",
//     marginTop: 10,
//     marginLeft: 60,
//     paddingBottom: 24,
//   },
//   input: {
//     backgroundColor: "#F6F7FB",
//     height: 58,
//     marginBottom: 30,
//     fontSize: 16,
//     borderRadius: 20,
//     padding: 15,
//   },
//   backImage: {
//     position: 'absolute',
//     top: 10 ,
//     left: 5,
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//   },
//   whiteSheet: {
//     width: '100%',
//     height: '90%',
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: '#C4C4C48A',
//     borderTopLeftRadius: 60,
//     borderTopRightRadius: 60,
//   },
//   form: {
//     flex: 1,
//     justifyContent: 'space-around',
//     marginTop: 35,
//     marginHorizontal: 30,
//   },
//   button: {
//     backgroundColor: '#019874',
//     height: 58,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
// });


import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth , database } from '../../config/firebase';
const backImage = require("../../assets/3d-render-medical-background-with-brain-being-attacked-by-virus-cells.jpg");
import Toast from './Toast';
import { BackHandler } from "react-native";
import IMG from '../assets/Vector.svg';

export default function Signup({ navigation }) {
  const toastRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');


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

  const onHandleSignup = async () => {
    if (email !== '' && password !== '') {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // await addDoc(collection(database, "users"), { first });
        toastRef.current.show({
          type: 'success',
          text: 'Signup successful',
          duration: 2000,
        });
        setTimeout(() => {
          navigation.navigate("LogIn");
        }, 3000);
      } catch (err) {
        toastRef.current.show({
          type: 'warning',
          text: 'Something went wrong, try again',
          duration: 2000,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <IMG style={styles.backImage} />
      <Text style={styles.head}> MS Insight </Text>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Toast ref={toastRef} />
        <Text style={styles.title}>Register With Us!</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Your FirstName"
            autoCapitalize="none"
            autoFocus={true}
            onChangeText={(text) => setFirst(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your LastName"
            autoCapitalize="none"
            autoFocus={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text style={{ color: 'red', fontWeight: '300', fontSize: 12 }}> Log In</Text>
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
    top: 0,
    right: 0,
    zIndex: 5,
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
    top: 10,
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
