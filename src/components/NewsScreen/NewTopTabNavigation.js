import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import News from './TopsTabs/News';
import Analytics from './TopsTabs/Analytics';
import Coupons from './TopsTabs/Coupons';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const NewTopTabNavigation = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarIndicatorStyle: { backgroundColor: 'black' },
                    tabBarStyle: { backgroundColor: '#fff' },
                }}
            >
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="Analytics" component={Analytics} />
                <Tab.Screen name="Coupons" component={Coupons} />
            </Tab.Navigator>
        </>
    );
};

export default NewTopTabNavigation;

const styles = StyleSheet.create({
    gradientText: {
        padding: 10,
        width: "100%",
        height: 50,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },

    offer: {
        color: "white",
        fontSize: 16,
        fontWeight: '700',
    }
});
