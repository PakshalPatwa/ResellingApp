import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Images from '../../Images/Images';

const SignOut = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
          <Image source={Images.backarrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign Out</Text>
      </View>
    </View>
  )
}

export default SignOut

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  headerTitle: {
    fontSize: 14,
    color: '#2C398B',
    marginLeft: 15,
    fontFamily: 'Poppins-SemiBold',
  },
})