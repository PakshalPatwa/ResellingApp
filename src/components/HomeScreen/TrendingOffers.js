import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import images from "../Images/Images";
 
const imageList = [
    { id: 1, image: images.News6 },
    { id: 2, image: images.News2 },
    { id: 3, image: images.News4 },
    { id: 4, image: images.News5 },
];
 
const TrendingOffers = () => {
    return (
        <View style={styles.container}>
 
            <Text style={styles.title}>Trending Offers</Text>
 
            <Swiper
                autoplay
                autoplayTimeout={3}
                loop
                showsPagination
                containerStyle={styles.swiper}
            >
                {imageList.map((item) => (
                    <View key={item.id} style={styles.slide}>
                        <Image source={item.image} style={styles.image} resizeMode="cover" />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        maxHeight: 260,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginBottom: 10,
    },
    title: {
        padding: 10,
        fontSize: 14,
        // fontWeight: '700',
        color: '#1F3D4D',
        fontFamily:'Poppins-Bold'
    },
    swiper: {
        borderRadius: 10,
    },
 
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
});
 
export default TrendingOffers;
 