import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import React from 'react';
import data from '../data/datatest';
import { MotiView } from 'moti';
import AppHeader from '../components/AppHeader';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
const FlatlistRevealAnimationScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const renderItem = ({ item, index }) => {
    return (
      <MotiView
        style={styles.listContainer}
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1000 + index * 200 }}>
        <View style={styles.rowtitle}>
          <Feather name="brain" style={styles.nameIcon} color="white" />
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            if(index == 0)
            navigation.navigate("MsTesting")
            if(index == 1)
            navigation.navigate("floodlight")
            if(index == 2)
            navigation.navigate("Image")
            if(index == 3)
            navigation.navigate("Segmation")
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>test Now</Text>
          </View>
        </TouchableWithoutFeedback>
      </MotiView>
    );
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ flex: 1, paddingTop: insets.top }}>

        <AppHeader
          title="Detection"
          optionalBadge={5}
          menu
        />

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={1}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default FlatlistRevealAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listContainer: {
    width: Dimensions.get('window').width - 30,
    backgroundColor: '#cef5eb',
    padding: 5,
    margin: 15,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  nameText: {
    color: 'gray',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18
  },
  priceText: {
    marginHorizontal: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#019874',
    padding: 10,
    margin: 15,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize:18,
    textTransform:'capitalize'
  },
  rowtitle: {
    flex: 1,
    flexDirection: 'row',
  },
  nameIcon: {
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
    fontSize: 25

  }
});
