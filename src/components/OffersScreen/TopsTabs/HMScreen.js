import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ClaimButton from '../../Button/Claim';
import images from '../../Images/Images';

const offers = [
  {
    id: 1,
    title: 'Christmas Tree - LEGO',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Christmas,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
  {
    id: 2,
    title: 'Guardians of the Galaxy Ad...',
    description: 'Offer Price:',
    descriptionprice: '£39.99',
    image: images.Guardians,
    Expiresimage: images.Expires,
    Expires: 'Expires in',
    Expirestime: '23:45 hours'
  },
];

const HMScreen = () => {

  return (
    <View style={styles.container}>
      {offers.map((offer, index) => (
        <View key={offer.id}>
          <View key={index}>
            <View style={styles.card}>
              <View style={styles.subContainer}>
                <Image source={offer.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{offer.title}</Text>
                  <View style={styles.subtextContainer}>
                    <Text style={styles.description}>{offer.description}</Text>
                    <Text style={styles.descriptionprice}>{offer.descriptionprice}</Text>
                  </View>
                  <View style={styles.expiryRow}>
                    <Image source={offer.Expiresimage} style={styles.Expiresimage} />
                    <Text style={styles.expires}>{offer.Expires}</Text>
                    <Text style={styles.expirestime}>{offer.Expirestime}</Text>
                    <ClaimButton />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))
      }
    </View >
  );
};

export default HMScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  card: {
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    padding: 5,
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 90,
    height: 90,
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  subtextContainer: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    color: '#1F3D4D',
    fontFamily:'Poppins-SemiBold',
  },

  description: {
    fontSize: 12,
    color: "rgba(31, 61, 77, 0.4)",
    fontFamily:'Poppins-Regular',
  },

  descriptionprice: {
    fontSize: 12,
    color: "#2EBD59",
    fontWeight: '700',
    fontFamily:'Poppins-Regular',
  },

  expiryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Expiresimage: {
    width: 17,
    height: 17
  },

  expires: {
    paddingHorizontal: 2,
    fontSize: 10,
    color: "#1F3D4D",
    letterSpacing: 1,
    fontFamily:'Poppins-Regular',
  },

  expirestime: {
    paddingHorizontal: 2,
    fontSize: 10,
    fontFamily:'Poppins-Bold',
    color: "#E5246A",
  }
});
