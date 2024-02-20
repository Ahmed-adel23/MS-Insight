import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../../FlatlistRevealAnimationScreen';
import CustomBottomTab from '../components/CustomBottomTab';
import ProfileScreen from '../screen/ProfileScreen';
import SearchScreen from '../screen/SearchScreen';

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Setting: undefined;
  Profile: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
