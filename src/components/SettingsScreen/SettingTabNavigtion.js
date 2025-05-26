import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ManagePayment from './Tabs/ManagePayment';
import InviteFriends from './Tabs/InviteFriends';
import Notifications from './Tabs/SettingNotifications';
import PrivacyPolicy from './Tabs/PrivacyPolicy';
import AboutUs from './Tabs/AboutUs';
import LanguageSelection from './Tabs/LanguageSelection';
import SignOut from './Tabs/SignOut';
import { useNavigation } from '@react-navigation/native';
import Images from '../Images/Images';

const SettingTabNavigtion = () => {
  const navigation = useNavigation();

  const tabs = [
    { name: "Manage Payment", component: ManagePayment },
    { name: "Invite Friends", component: InviteFriends },
    { name: "Notifications", component: Notifications },
    { name: "Privacy Policy", component: PrivacyPolicy },
    { name: "About Us", component: AboutUs },
    { name: "Language Selection", component: LanguageSelection },
    { name: "Sign Out", component: SignOut },
  ];

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
              <Image source={Images.backarrow} style={styles.backIcon} />
              <Text style={styles.Title}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.headerTitle}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Image source={Images.Profile} style={styles.image} />
            <Text style={styles.text}>John Doe!</Text>
            <Text style={styles.subtext}>john.doe@example.com</Text>
            <Text style={styles.text}>Bonus Points: 1080</Text>
          </View>

          {/* Buttons for each Tab */}
          <View style={styles.tabContainer}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={styles.tabButton}
                onPress={() => navigation.navigate(tab.name)}
              >
                <Text style={styles.tabText}>{tab.name}</Text>
                {/* Directly include the Image inside the same Touchable */}
                <Image source={Images.Rightside} style={styles.Rightside} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SettingTabNavigtion;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#2C398B',
    justifyContent: 'space-around',
  },
  tabContainer: {
    width: '100%',
    height:'100%',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#F2F3FA',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontFamily:'Poppins-Regular',
    color: '#2C398B',
  },
  Rightside: {
    width: 15,
    height: 15,
    tintColor: '#2C398B',
  },
  logocontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 20,
    width: 20,
    tintColor: '#FFFFFF'
  },
  Title: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginLeft: 10,
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 1,
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
  },
  content: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    fontFamily:'Poppins-Bold',
    color: '#FFFFFF',
  },
  subtext: {
    fontSize: 12,
    fontFamily:'Poppins-Regular',
    color: '#FFFFFF',
  },
});
