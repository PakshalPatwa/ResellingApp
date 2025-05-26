import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from '../../Images/Images';

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.logocontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
          <Image source={Images.backarrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.Title}>Home</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.profileheading}>About Us</Text>
        </View>

        <View style={styles.tabContainer}>
          {/* First Part */}
          <Text style={styles.text}>Lorem Ipsum is simply dummy</Text>
          <Text style={styles.subtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <Text style={styles.subtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>

          {/* Second Part */}
          <Text style={styles.text}>Where does it come from?</Text>
          <Text style={styles.subtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C398B',
  },
  logocontainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 20,
    width: 20,
    tintColor: '#FFFFFF',
  },
  Title: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginLeft: 10,
    letterSpacing: 1,
  },
  content: {
    margin: 50,
    alignItems: 'center',
  },
  profileheading: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  tabContainer: {
    width: '100%',
    height: '100%',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F3D4D',
    marginVertical: 10,
  },
  subtext: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#1F3D4D',
    textAlign: 'justify',
    lineHeight: 22,
    // marginBottom: 15,
  },
});
