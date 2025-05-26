import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ClaimButton from '../Button/Claim';
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../Images/Images';
import LinearGradient from 'react-native-linear-gradient';

const offers = [
    {
        id: 1,
        title: 'Upto 50% off on Amazon',
        description: 'No minimum amount required. Just visit amazon.com and avail the coupon.',
        image: images.amazon,
        Expiresimage: images.Expires,
        Expires: 'Expires in',
        Expirestime: '23:45 hours'
    },
    {
        id: 2,
        title: 'Dailymotion Subscription 10% off',
        description: 'Quick, get this offer before it expires. Only valid for new users.',
        image: images.dailymotion,
        Expiresimage: images.Expires,
        Expires: 'Expires in',
        Expirestime: '23:45 hours'
    },
    {
        id: 3,
        title: 'Upto 50% off on Amazon',
        description: 'No minimum amount required. Just visit amazon.com and avail the coupon.',
        image: images.amazon,
        Expiresimage: images.Expires,
        Expires: 'Expires in',
        Expirestime: '23:45 hours'
    },
    {
        id: 4,
        title: 'Dailymotion Subscription 10% off',
        description: 'Quick, get this offer before it expires. Only valid for new users.',
        image: images.dailymotion,
        Expiresimage: images.Expires,
        Expires: 'Expires in',
        Expirestime: '23:45 hours'
    },
    {
        id: 5,
        title: 'Upto 50% off on Amazon',
        description: 'No minimum amount required. Just visit amazon.com and avail the coupon.',
        image: images.amazon,
        Expiresimage: images.Expires,
        Expires: 'Expires in',
        Expirestime: '23:45 hours'
    },
    {
        id: 6,
        title: 'Dailymotion Subscription 10% off',
        description: 'Quick, get this offer before it expires. Only valid for new users.',
        image: images.dailymotion,
        Expiresimage: images.Expires,
        Expires: 'Expires in',
        Expirestime: '23:45 hours'
    },
];

const OffersList = ({ type }) => {
    const [favorites, setFavorites] = useState({});
    const [selectedOffer, setSelectedOffer] = useState('Popular');

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id] // Toggle the favorite status
        }));
    };
    return (

        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => setSelectedOffer('Popular')}>
                    {selectedOffer === 'Popular' ? (
                        <LinearGradient
                            colors={['#2C398B', '#01AAEC']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <Text style={styles.offer}>Popular Offers</Text>
                        </LinearGradient>
                    ) : (
                        <Text style={[styles.offer, styles.inactive]}>Popular Offers</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedOffer('Latest')}>
                    {selectedOffer === 'Latest' ? (
                        <LinearGradient
                            colors={['#2C398B', '#01AAEC']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <Text style={styles.offer}>Latest Offers</Text>
                        </LinearGradient>
                    ) : (
                        <Text style={[styles.offer, styles.inactive]}>Latest Offers</Text>
                    )}
                </TouchableOpacity>
            </View>

            {offers.map((offer, index) => (
                <View key={offer.id} style={styles.card}>
                    <View key={index}>
                        <View style={styles.offer}>
                            <Image source={offer.image} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{offer.title}</Text>
                                <Text style={styles.description}>{offer.description}</Text>
                            </View>
                            {/* Heart Icon with Click Functionality */}
                            <TouchableOpacity onPress={() => toggleFavorite(offer.id)}>
                                <Icon
                                    name={favorites[offer.id] ? "heart" : "hearto"}
                                    size={20}
                                    color={favorites[offer.id] ? "red" : "red"}
                                />
                            </TouchableOpacity>
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
    );
};

export default OffersList;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },

    offer: {
        color: "white",
        fontSize: 12,
        // fontWeight: '700',
        fontFamily:'Poppins-Bold',
        margin: 10,
        flexDirection: 'row',
    },
    
    inactive: {
        fontSize: 12,
        // fontWeight: '700',
        fontFamily:'Poppins-Bold',
        color: 'rgba(31, 61, 77, 0.6)',
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

   

    image: {
        width: 32,
        height: 32,
        marginRight: 15,
    },

    Expiresimage: {
        width: 17,
        height: 17
    },

    textContainer: {
        width: '80%',
        height: 52,
    },

    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontSize: 14,
        color: '#1F3D4D',
        fontFamily:'Poppins-SemiBold'

    },
    description: {
        fontSize: 10,
        fontFamily:'Poppins-Regular',
        color: "rgba(31, 61, 77, 0.4)",
    },
    btn: {
        // height:'50',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 5,
    },

    expiryRow: {
        marginVertical:20,
        marginRight: 80,
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
    },

    expirestime: {
        fontSize: 10,
        fontWeight: "700",
        color: "#1F3D4D",
        fontFamily:'Poppins-Regular'
    }
});