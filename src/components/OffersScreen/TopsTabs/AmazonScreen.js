import { StyleSheet, Text, View, Image,  ScrollView } from 'react-native';
import React, { useState } from 'react';
import ClaimButton from '../../Button/Claim';
import images from '../../Images/Images';

const offers = [
  {
    id: 1,
    title: 'Fossil Watch with Face ID',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Brand,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
  {
    id: 2,
    title: 'Fossil Watch with Face ID',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Brand,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
  {
    id: 3,
    title: 'Fossil Watch with Face ID',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Brand,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
  {
    id: 4,
    title: 'Fossil Watch with Face ID',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Brand,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
  {
    id: 5,
    title: 'Fossil Watch with Face ID',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Brand,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
];

const AmazonScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>
    <View style={styles.container}>
      {offers.map((offer, index) => (
        <View key={offer.id} style={styles.card}>
          <View key={index}>
            <View style={styles.offer}>
              <Image source={offer.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{offer.title}</Text>
                <View style={styles.subtextContainer}>
                  <Text style={styles.description}>{offer.description}</Text>
                  <Text style={styles.descriptionprice}>{offer.descriptionprice}</Text>
                </View>
              </View>
            </View>

            <View style={styles.btn}>
              <View style={styles.expiryRow}>
                <Image source={offer.Expiresimage} style={styles.Expiresimage} />
                <Text style={styles.expires}>{offer.Expires}</Text>
                <Text style={styles.expirestime}>{offer.Expirestime}</Text>
              </View>
              <ClaimButton />
            </View>

          </View>
        </View>
      ))
      }
    </View >
  </ScrollView>
  )
}

export default AmazonScreen

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  offer: {
    margin: 10,
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: 50,
    borderRadius: 4,
    marginRight: 25,
  },

  Expiresimage: {
    width: 17,
    height: 17
  },

  textContainer: {
    maxWidth: 250,
    height: 52,
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 14,
    color: '#1F3D4D',
    fontFamily:'Poppins-SemiBold',
  },

  subtextContainer: {
    flexDirection: 'row'
  },

  description: {
    fontSize: 12,
    color: "rgba(31, 61, 77, 0.4)",
    fontFamily:'Poppins-Regular',
  },

  descriptionprice: {
    fontSize: 12,
    color: "#2EBD59",
    fontFamily:'Poppins-Bold',
  },

  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },

  expiryRow: {
    marginRight: 50,
    flexDirection: 'row',
  },

  Expiresimage: {
    width: 17,
    height: 17
  },

  expires: {
    paddingHorizontal: 5,
    fontSize: 10,
    color: "#1F3D4D",
    letterSpacing: 1,
    fontFamily:'Poppins-Regular',
  },

  expirestime: {
    fontSize: 10,
    color: "#E5246A",
    fontFamily:'Poppins-SemiBold',
  }
});