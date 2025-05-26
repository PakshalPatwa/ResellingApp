import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from './Images/Images';
import GradientButton from './Button/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const Claimdetails = () => {
    const navigation = useNavigation();

    const tabs = [
        { name: "New Price", Value: " $23" },
        { name: "Discount (%)", Value: "30%" },
        { name: "Shipping Charges", Value: " $10" },
        { name: "eBay Average Price", Value: "Tap to Unlock" },
        { name: "eBay Top Price", Value: "Tap to Unlock" },
        { name: "eBay Sales", Value: "$Tap to Unlock" },
        { name: "Manufacturer Price", Value: "$20" },
        { name: "Seller", Value: " Acme Inc." },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.logocontainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                        <Image source={Images.backarrow} style={styles.backIcon} />
                        <Text style={styles.Title}>Offer Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Images.share} style={styles.shareimage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.offerDetails}>
                    <View style={styles.content}>
                        <Image source={Images.Brand} style={styles.image} />
                        <Text style={styles.description}>Upto 50% off on Amazon</Text>
                    </View>
                    <Text style={styles.subdescription}>No minimum amount required. Just visit amazon.com and avail the coupon.</Text>
                </View>
                <View style={styles.tabContainer}>
                    <Text style={styles.text}>More About Offer</Text>
                    {tabs.map((tab, index) => (
                        <TouchableOpacity key={index} style={styles.tabButton}>
                            <Text style={styles.Text}>{tab.name}</Text>
                            <Text style={styles.tabText}>{tab.Value}</Text>
                        </TouchableOpacity>
                    ))}
                    <View style={styles.inputContainer}>
                        <View style={styles.subinputContainer}>
                            <Icon name="like1" size={16} color="#000000" style={styles.inputIcon} />
                            <Text>109</Text>
                        </View>
                        <View style={styles.subinputContainer}>
                            <Icon name="dislike1" size={16} color="#000000" style={styles.inputIcon} />
                            <Text>12</Text>
                        </View>
                        <View style={styles.subinputContainer}>
                            <Icon2 name="shuttle-space" size={16} color="#000000" style={styles.inputIcon} />
                            <Text>207</Text>
                        </View>
                        <View style={styles.subinputContainer}>
                            <Icon3 name="fire" size={20} color="#000000" style={styles.inputIcon} />
                            <Text>120</Text>
                        </View>
                    </View>
                </View>
            </View>
            <GradientButton title={"Get Coupon"} />
        </ScrollView >
    );
};

export default Claimdetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C398B',
    },

    logocontainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },

    backWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    backIcon: {
        height: 20,
        width: 20,
        tintColor: '#FFFFFF'
    },

    Title: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 10,
        letterSpacing: 1,
        fontFamily:'Poppins-SemiBold',

    },

    headerTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 1,
        textDecorationLine: 'underline',
    },

    offerDetails: {
        paddingVertical: 20,
    },

    content: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 10,
    },

    image: {
        width: 100,
        height: 50,
        borderRadius: 4,
        marginRight: 25,
    },

    shareimage: {
        width: 15,
        height: 15,
    },

    description: {
        maxWidth:200,
        fontSize: 16,
        color: "#FFFFFF",
        // fontWeight: '700',
        fontFamily:'Poppins-Bold',
    },

    subdescription: {
        fontSize: 10,
        color: "#FFFFFF",
        paddingHorizontal: 20,
        fontFamily:'Poppins-Regular',
    },

    tabContainer: {
        width: '100%',
        height: '100%',
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
    },

    text: {
        fontSize: 14,
        color: '#1F3D4D',
        paddingHorizontal: 20,
        fontFamily:'Poppins-Bold',
    },

    tabButton: {
        marginVertical: 15,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#F2F3FA',
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    Text: {
        fontSize: 12,
        color: '#1F3D4D',
        // fontWeight: '500',
        fontFamily:'Poppins-Regular',
    },

    tabText: {
        fontSize: 12,
        color: '#1F3D4D',
        // fontWeight: '700',
        fontFamily:'Poppins-Bold',
    },

    inputContainer: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    subinputContainer: {
        borderRadius: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputIcon: {
        paddingHorizontal: 5,
    },
});
