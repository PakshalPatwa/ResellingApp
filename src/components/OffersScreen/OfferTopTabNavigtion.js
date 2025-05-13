import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HMScreen from './TopsTabs/HMScreen';
import TommyScreen from './TopsTabs/TommyScreen';
import AmazonScreen from './TopsTabs/AmazonScreen';
import KDMScreen from './TopsTabs/KDMScreen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BrandScreen from './BrandScreen';
import ShopsScreen from './ShopsScreen';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const OfferTopTabNavigation = () => {
    const Tab = createMaterialTopTabNavigator();
    const [activeTab, setActiveTab] = useState('Brands');
    const navigation = useNavigation(); // ✅ Use navigation hook

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === 'Brands') {
            navigation.navigate('BrandScreen'); // ✅ Navigate to BrandScreen
        } else {
            navigation.navigate('ShopsScreen'); // ✅ Navigate to ShopsScreen
        }
    };

    return (
        <>
            <LinearGradient
                colors={['#2C398B', '#01AAEC']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientHeader}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.offerText}>Offers</Text>
                    <View style={styles.subheaderContent}>
                        <View style={styles.tabSwitch}>
                            <TouchableOpacity
                                style={[
                                    styles.tabButton,
                                    activeTab === 'Brands' ? styles.activeTab : styles.inactiveTab,
                                ]}
                                onPress={() => handleTabChange('Brands')}
                            >
                                <Text style={activeTab === 'Brands' ? styles.activeText : styles.inactiveText}>
                                    Brands
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.tabButton,
                                    activeTab === 'Shops' ? styles.activeTab : styles.inactiveTab,
                                ]}
                                onPress={() => handleTabChange('Shops')}
                            >
                                <Text style={activeTab === 'Shops' ? styles.activeText : styles.inactiveText}>
                                    Shops
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Icon name="filter" size={20} color="#FFFFFF" style={styles.inputIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarIndicatorStyle: { backgroundColor: 'black' },
                    tabBarStyle: { backgroundColor: '#fff' },
                }}
            >
                <Tab.Screen name="H&M" component={HMScreen} />
                <Tab.Screen name="Tommy" component={TommyScreen} />
                <Tab.Screen name="Amazon" component={AmazonScreen} />
                <Tab.Screen name="KDM" component={KDMScreen} />
            </Tab.Navigator>
        </>
    );
};

export default OfferTopTabNavigation;

const styles = StyleSheet.create({
    gradientHeader: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: "100%",
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    offerText: {
        color: "white",
        fontSize: 18,
        fontWeight: '700',
    },
    subheaderContent: {
        flexDirection: 'row',
    },
    tabSwitch: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
    },
    tabButton: {
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    activeTab: {
        backgroundColor: '#FFFFFF',
    },
    inactiveTab: {
        backgroundColor: '#CCCCCC',
    },
    activeText: {
        fontSize: 14,
        color: '#1F3D4D',
        fontWeight: '400',
    },
    inactiveText: {
        fontSize: 14,
        color: '#7A7A7A',
        fontWeight: '400',
    },
    inputIcon: {
        marginTop: 5,
        marginHorizontal: 5
    },
});
