import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ onPress, title, colors = ['#2C398B', '#01AAEC'], style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
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
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 8,
        marginVertical: 5,
        // backgroundColor: '#1F3D4D',
    },
    gradientButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: 'bold',
    },
});

export default GradientButton;
