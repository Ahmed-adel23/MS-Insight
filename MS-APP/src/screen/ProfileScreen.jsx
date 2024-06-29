import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple, Button} from 'react-native-paper';
import { auth } from '../../config/firebase';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const logout = () => {
    auth.signOut().then(() => {
      navigation.replace('LogIn');
    }).catch((error) => {
      console.error('Sign Out Error', error);
    });
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <AppHeader 
        title="Profile"  
        optionalBadge={5} 
        menu 
      />
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 35 , justifyContent: 'center', alignItems: 'center' , width: 100 , height: 100 , backgroundColor: '#019874' , borderRadius: 50 , overflow: 'hidden' }}>
          <Text style={{color:"white", textAlign: 'center', fontSize: 50, fontWeight: 'bold', textTransform: 'uppercase'}}>{auth.currentUser?.email.slice(0, 2)}</Text>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Text style={{color:"#777777", textAlign: 'center', fontSize: 18}}>{auth.currentUser?.email}</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

      <View style={styles.logoutWrapper}>
        <Button onPress={logout}><Text style={{color: 'white', fontSize: 18,  fontWeight: 'bold'}}>Logout</Text>
        </Button>
      </View>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginHorizontal: 'auto'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center'
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  logoutWrapper: {
    marginTop: 20,
    paddingHorizontal: 30,
    marginHorizontal: 50,
    backgroundColor: '#019874',
    borderRadius: 20,
    color: 'white'
  },
});


