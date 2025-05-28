import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../Images/Images';
import GradientButton from '../Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Basic = ({ colors = ['#2C398B', '#01AAEC'] }) => {
  const navigation = useNavigation();

  const tabs = [
    { title: 'Lorem Ipsum is simply' },
    { title: 'Lorem Ipsum is simply du' },
    { title: 'Lorem Ipsum is simply dummy' },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', paddingVertical: 25 }}>
          <LinearGradient
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.priceButton}
          >
            <Text style={styles.priceText}>$49.99/month</Text>
          </LinearGradient>
        </View>

        <Text style={styles.heading}>Features and Benefits</Text>
        <View style={styles.featuresContainer}>
          {tabs.map((tab, index) => (
            <View key={index}>
              <View style={styles.featureRow}>
                <Image source={Images.Rigth} style={styles.icon} />
                <Text style={styles.featureText}>{tab.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <GradientButton
        title={"Subscribe"}
        style={styles.button}
        onPress={() => navigation.navigate('ChooseBrands')}
      />
    </>
  );
};

export default Basic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  priceButton: {
    width: 280,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceText: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },

  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#2C398B',
    marginVertical: 16,
  },

  featuresContainer: {
    gap: 10,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  featureText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#2C398B',
  },

  button: {
    position: 'absolute',
    bottom: 10,
    width: 'auto',
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
