import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home/BottomTabNavigtion';
import SplashScreen from './src/components/SplashScreen';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Notifications from './src/components/Notifications';
import Newsletter from './src/components/NewsScreen/Newsletter';
import ForgotPassword from './src/components/ForgotPassword';
// import BottomTabNavigation from './src/components/Home/BottomTabNavigtion';
import ManagePayment from './src/components/SettingsScreen/Tabs/ManagePayment';
import InviteFriends from './src/components/SettingsScreen/Tabs/InviteFriends';
import PrivacyPolicy from './src/components/SettingsScreen/Tabs/PrivacyPolicy';
import AboutUs from './src/components/SettingsScreen/Tabs/AboutUs';
import SettingNotifications from './src/components/SettingsScreen/Tabs/SettingNotifications';
import LanguageSelection from './src/components/SettingsScreen/Tabs/LanguageSelection';
import SignOut from './src/components/SettingsScreen/Tabs/SignOut';
import EditProfile from './src/components/SettingsScreen/EditProfile'
import Claimdetails from './src/components/Claimdetails';
import BrandScreen from './src/components/OffersScreen/BrandScreen'
import ShopsScreen from './src/components/OffersScreen/ShopsScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigation' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTabNavigation" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="OfferDetails" component={Claimdetails} />
        <Stack.Screen name="BrandScreen" component={BrandScreen} />
        <Stack.Screen name="ShopsScreen" component={ShopsScreen} />
        <Stack.Screen name="Newsletter" component={Newsletter} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Manage Payment" component={ManagePayment} />
        <Stack.Screen name="Invite Friends" component={InviteFriends} />
        <Stack.Screen name="SettingNotifications" component={SettingNotifications} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="About Us" component={AboutUs} />
        <Stack.Screen name="Language Selection" component={LanguageSelection} />
        <Stack.Screen name="Sign Out" component={SignOut} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
