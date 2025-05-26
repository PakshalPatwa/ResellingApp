import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Images from './Images/Images'; // Ensure this path is correct

const Notifications = () => {
    const navigation = useNavigation(); // Initialize navigation

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                    <Image source={Images.backarrow} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>

            {/* Notification Image and Text */}
            <View style={styles.content}>
                <Image source={Images.nonotification} style={styles.image} />
                <Text style={styles.text}>No notifications!</Text>
            </View>
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3FA',
    },
    header: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    backIcon: {
        height: 20,
        width: 20,
    },
    headerTitle: {
        fontSize: 14,
        color: '#2C398B',
        marginLeft: 15,
        fontFamily: 'Poppins-SemiBold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
        color: '#222222',
    },
});
