import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Images from '../Images/Images';

const Newsletter = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                    <Image source={Images.backarrow} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>News title comes here</Text>
            </View>

            <ScrollView>
                <View style={styles.content}>
                    <Image source={Images.Newsletter1} style={styles.image} />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>Become a reseller - It's that easy to start</Text>
                    <Text style={styles.subtext}>Would you like to become a reseller? Great!
                        But you don't quite know how to start yet? Do not worry!
                        This reselling guide offers you a good  foundation so that you too can get started as  soon as possible  .
                    </Text>

                    {/* Second Part */}
                    <Text style={styles.text}>Business Registration and Tax Office</Text>
                    <Text style={styles.subtext}>
                        Before you start your reselling business, you have to register a business.
                        If you don't do this, you make yourself liable to prosecution.
                    </Text>
                    <Text style={styles.subtext}>But what do you need for a business registration?</Text>
                    <View style={styles.listContainer}>
                        <Text style={styles.listItem}>• €20-70</Text>
                        <Text style={styles.listItem}>• A valid identity card</Text>
                    </View>

                    {/* Thired Part */}
                    <Text style={styles.text}>Contents:</Text>
                    <Text style={styles.subtextlink}>Business registration and tax office</Text>
                    <Text style={styles.subtextlink}>Own domain and email</Text>
                    <Text style={styles.subtextlink}>Business and Paypal account</Text>
                    <Text style={styles.subtextlink}>Accounting software</Text>
                    <Text style={styles.subtextlink}>legal texts</Text>


                </View>
            </ScrollView>
        </View>
    )
}

export default Newsletter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3FA',
    },
    header: {
        height: 60,
        backgroundColor: '#2C398B',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    backIcon: {
        height: 20,
        width: 20,
        tintColor: '#FFFFFF'
    },
    headerTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        marginLeft: 15,
    },
    content: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    textcontainer: {
        padding: 15,
    },
    text: {
        fontSize: 16,
        color: '#1F3D4D',
        fontFamily: 'Poppins-SemiBold',
        letterSpacing: 1
    },
    subtext: {
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Poppins-Regular',
        color: '#1F3D4D',
        letterSpacing: 1,
        marginBottom: 10
    },
    listContainer: {
        marginTop: 8,
        marginLeft: 16,
    },
    listItem: {
        fontSize: 14,
        color: '#1F3D4D',
        letterSpacing: 1,
        fontFamily: 'Poppins-Regular',
    },
    subtextlink:{
        fontSize: 14,
        color: '#01AAEC',
        fontFamily:'Poppins-SemiBold',
        letterSpacing: 1,
        textDecorationLine:'underline',
    },
})