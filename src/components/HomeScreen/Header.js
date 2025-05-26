import React from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import images from "../Images/Images";
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <TouchableOpacity>
                    <Image source={images.Logo1} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Image source={images.notifications} style={styles.notifications} />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Search" style={styles.form} />
                <Icon name="search" size={20} color="#000000" style={styles.inputIcon} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    logocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25,
        margin: 5,
        paddingHorizontal: 15,
    },
    image: {
        width: 150,
        height: 40,
    },
    notifications: {
        width: 20,
        height: 20,
    },
    inputIcon: {
        fontSize: 22,
        color: "rgba(31, 61, 77, 0.6)",
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F3FA',
        borderRadius: 25,
        margin: 5,
        paddingHorizontal: 15,
    },
    form: {
        width: 366,
        height: 48,
        fontSize: 12,
        // fontWeight: '700',
        fontFamily: 'Poppins-SemiBold',
        flex: 1,
    },
})
