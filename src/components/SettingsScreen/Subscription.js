import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Starter from '../SettingsScreen/Starter';
import Basic from '../SettingsScreen/Basic';
import Pro from '../SettingsScreen/Pro';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../Images/Images';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Subscription = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                    <Image source={Images.backarrow} style={styles.backIcon} />
                    <Text style={styles.Title}>Home</Text>
                </TouchableOpacity>
            </View>

            {/* Optional: mimic a profile or headline section */}
            <View style={styles.content}>
                <Text style={styles.text}>Subscription</Text>
            </View>

            <View style={styles.tabContainer}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: { fontSize: 14, fontFamily: 'Poppins-Bold' },
                        tabBarIndicatorStyle: { backgroundColor: '#2C398B' },
                        tabBarStyle: { backgroundColor: '#fff' },
                    }}
                >
                    <Tab.Screen name="Starter" component={Starter} />
                    <Tab.Screen name="Pro" component={Pro} />
                    <Tab.Screen name="Basic" component={Basic} />
                </Tab.Navigator>
            </View>
        </View>
    );
};

export default Subscription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C398B',
    },
    logocontainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
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
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        marginLeft: 10,
        letterSpacing: 1,
    },
    content: {
        marginVertical: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginVertical: 10,
        fontFamily: 'Poppins-Bold',
    },

    tabContainer: {
        width: '100%',
        flex: 1,
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    },
});
