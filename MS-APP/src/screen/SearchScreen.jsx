import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
const SearchScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <AppHeader 
          title= "Search"  
          optionalBadge={5} 
          menu 
        />
       </View>
    </SafeAreaProvider>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
