import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackHandler } from 'react-native';
import AppHeader from '../components/AppHeader';
import HomeImg from '../assets/PortfolioUpdate-amico.svg';

const HomeScreen = () => {
  const navigation = useNavigation(); 
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const handleBackButton = () => true;
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <AppHeader title="Home" optionalBadge={5} menu />
        <View style={styles.content}>
          <HomeImg height={'300'} width={'300'} />
          <Text style={styles.TextHeader}> Hello! </Text>
          <Text style={styles.Textpargh}> do you want to make a test? </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Test Now</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: -150,
  },
  TextHeader: {
    paddingHorizontal: 25,
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'capitalize',
    paddingBottom: 10,
  },
  Textpargh: {
    paddingHorizontal: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 18,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#001B79',
    padding: 10,
    paddingHorizontal: 25,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize:18
  },
});
