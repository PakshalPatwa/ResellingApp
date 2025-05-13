import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import images from "../Images/Images";

const Highlights = () => {
    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>
            <View style={styles.container}>
                <Text style={styles.Title}>Highlights</Text>
                <TouchableOpacity>
                    <Image source={images.News} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.Analytics} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.Coupons} style={styles.image} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Highlights

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff'
    },
    Title: {
        fontSize: 14,
        // fontWeight: '700',
        fontFamily:'Poppins-Bold',
        color: '#1F3D4D'
    },
    image: {
        width: '100%',
        height: 60,
        marginVertical: 5,
    }
})