import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import images from '../../Images/Images'; // Ensure the path is correct
import { useNavigation } from '@react-navigation/native';

const offers = [
  {
    id: 1,
    image: images.News1,
    title: 'News Title content',
    description: 'Quick, get this offer before it expires. Only valid for new users.',
    Expirestime: 'Uploaded on: 05/08/2022 3:34 PM'
  },
  {
    id: 2,
    image: images.News2,
    title: 'News Title content',
    description: 'Quick, get this offer before it expires. Only valid for new users.',
    Expirestime: 'Uploaded on: 05/08/2022 3:34 PM'
  },
  {
    id: 3,
    image: images.News3,
    title: 'News Title content',
    description: 'Quick, get this offer before it expires. Only valid for new users.',
    Expirestime: 'Uploaded on: 05/08/2022 3:34 PM'
  },
  {
    id: 4,
    image: images.News4,
    title: 'News Title content',
    description: 'Quick, get this offer before it expires. Only valid for new users.',
    Expirestime: 'Uploaded on: 05/08/2022 3:34 PM'
  },
  {
    id: 5,
    image: images.News5,
    title: 'News Title content',
    description: 'Quick, get this offer before it expires. Only valid for new users.',
    Expirestime: 'Uploaded on: 05/08/2022 3:34 PM'
  },
  {
    id: 6,
    image: images.News6,
    title: 'News Title content',
    description: 'Quick, get this offer before it expires. Only valid for new users.',
    Expirestime: 'Uploaded on: 05/08/2022 3:34 PM'
  },
];

const News = () => {
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

export default News;

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
    fontWeight: 600,
    fontWeight: 'bold',
    color: '#1F3D4D',
  },
  description: {
    fontSize: 10,
    fontWeight: 400,
    color: '#1F3D4D',
    marginVertical: 4,
  },
  expirestime: {
    fontSize: 10,
    fontWeight: 400,
    color: '#1F3D4D',
    marginTop: 5,
  },
});
