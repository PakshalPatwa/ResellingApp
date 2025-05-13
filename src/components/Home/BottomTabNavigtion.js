import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Tabs/HomeScreen';
import NewsScreen from './Tabs/NewsScreen';
import OffersScreen from './Tabs/OffersScreen';
import SettingsScreen from './Tabs/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }) => {
  const iconColor = focused ? '#01AAEC' : '#1F3D4D';
  return <Icon name={name} size={24} color={iconColor} />;
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'News') iconName = 'newspaper-outline';
          else if (route.name === 'Offers') iconName = 'pricetag-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';

          return <TabIcon name={iconName} focused={focused} />;
        },
        tabBarActiveTintColor: '#01AAEC',
        tabBarInactiveTintColor: '#1F3D4D',
        tabBarStyle: { backgroundColor: '#ffffff', paddingBottom: 5 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Offers" component={OffersScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="News" component={NewsScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
