import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const ClaimButton = ({ onPress, title = "Claim", colors = ['#2C398B', '#01AAEC'], style }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            navigation.navigate('OfferDetails');
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, style]}>
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientButton}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 75,
        height: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 5,
        backgroundColor: '#1F3D4D',
    },
    gradientButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: "uppercase",
        fontWeight: '600',
    },
});

export default ClaimButton;
