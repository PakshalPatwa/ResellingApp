import React from 'react';
import { StyleSheet } from 'react-native';
import OfferTopTabNavigtion from '../../OffersScreen/OfferTopTabNavigtion';

const OffersScreen = () => {
  return (
    <OfferTopTabNavigtion />
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
