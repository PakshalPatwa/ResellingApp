import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import images from "../Images/Images"; // Make sure this is the right path

const { width } = Dimensions.get('window');

const imageList = [
  { id: 1, image: images.Brand1 },
  { id: 2, image: images.Brand2 },
  { id: 3, image: images.Brand3 },
  { id: 4, image: images.Brand1 },
  { id: 5, image: images.Brand2 },
  { id: 6, image: images.Brand3 },
];

const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

const PopularBrands = () => {
  // **Chunk the array into groups of 3**
  const chunkedImages = chunkArray(imageList, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Brands</Text>
      <Swiper
        autoplay
        autoplayTimeout={3}
        loop
        showsPagination
        dotColor="#ccc"
        activeDotColor="#1F3D4D"
        containerStyle={styles.swiper}
      >
        {chunkedImages.map((row, index) => (
          <View key={index} style={styles.slide}>
            {row.map((item) => (
              <Image
                key={item.id}
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default PopularBrands;

const styles = StyleSheet.create({
  container: {
    maxHeight: 120,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginBottom: 10,
  },
  title: {
    padding: 10,
    fontSize: 14,
    //  fontWeight: '700',
    color: '#1F3D4D',
    fontFamily:'Poppins-Bold'
  },
  swiper: {
    borderRadius: 10,
  },
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  image: {
    width: (width / 3) - 15, // Divide screen width by 3 and subtract padding
    height: 60,
  },
});
