import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images from "../../Images/Images";
import { useNavigation } from '@react-navigation/native';

const ManagePayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View>
        <Text>Manage Payment</Text>
      </View>
    </View>
  )
}

export default ManagePayment

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Rightside: {
    width: 20,
    height: 20,
  },
})