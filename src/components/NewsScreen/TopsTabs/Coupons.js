import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import images from '../../Images/Images';
import { useNavigation } from '@react-navigation/native';

const offers = [
  {
    id: 1,
    image: images.News1,
    title: 'Coupons Title content',
    description: 'Only valid for new users.',
    Expirestime: 'Uploaded on: 10/10/2022 5:00 PM'
  },
  {
    id: 2,
    image: images.News2,
    title: 'Coupons Title content',
    description: 'Only valid for new users.',
    Expirestime: 'Uploaded on: 10/10/2022 5:00 PM'
  },
];

const Coupons = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {offers.map((offer) => (
        <TouchableOpacity onPress={() => navigation.navigate('Newsletter')} key={offer.id} style={styles.card}>
          <Image source={offer.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{offer.title}</Text>
            <Text style={styles.description}>{offer.description}</Text>
            <Text style={styles.expirestime}>{offer.Expirestime}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Coupons;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: "100%",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F3D4D',
  },
  description: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#1F3D4D',
    marginVertical: 4,
  },
  expirestime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#1F3D4D',
    marginTop: 5,
  },
});
