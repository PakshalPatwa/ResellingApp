import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import GradientButton from './Button/Button';
import images from "./Images/Images";

const Login = () => {
    const navigation = useNavigation();

    const handleForgotPassword = () => {
        console.log("Forgot Password clicked!");
        navigation.navigate('ForgotPassword');
    };

    const handleSignUP = () => {
        console.log("Sign Up clicked!");
        navigation.navigate('SignUp');
    };

    const handleSkip = () => {
        console.log("Skip clicked!");
        navigation.navigate('BottomTabNavigation');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleSkip()}>
                <Image source={images.Logo1} style={styles.image} />
            </TouchableOpacity>

            <View style={styles.inputView}>
                <Text style={styles.text}>Welcome Back!</Text>
                <Text style={styles.subtext}>Please sign in to continue</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.form} />
                <Icon name="mail" size={20} color="#000000" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Password" secureTextEntry style={styles.form} />
                <Icon name="key" size={20} color="#000000" style={styles.inputIcon} />
            </View>

            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => handleForgotPassword()}>
                    <Text style={styles.link}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>

            <GradientButton title={"Login"} onPress={() => handleSkip()} />

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.subtext1}>OR</Text>
                <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.appleButton}>
                <Icon name="apple1" size={24} color="#fff" />
                <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <Icon name="google" size={24} color="#fff" />
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.subtext1}>New to Reselling.de?</Text>
                <TouchableOpacity onPress={handleSignUP}>
                    <Text style={styles.link}> Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.SkipContainer}>
                <TouchableOpacity onPress={() => handleSkip()}>
                    <Text style={styles.Skip}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 251,
        height: 64,
        marginBottom: 20,
    },

    text: {
        fontWeight: '700',
        fontSize: 26,
        textAlign: 'center',
        color: '#1F3D4D',
    },
    subtext: {
        fontWeight: '700',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
        color: "rgba(31, 61, 77, 0.6)"
    },
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    subtext1: {
        fontWeight: '700',
        fontSize: 14,
        textAlign: "center",
        color: "rgba(31, 61, 77, 0.6)",
        marginVertical: 20,
    },
    inputContainer: {
        width: 366,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    inputIcon: {
        padding: 15,
        position: 'absolute',
        color: "rgba(31, 61, 77, 0.6)"
    },
    form: {
        width: '100%',
        height: 50,
        fontSize: 14,
        fontWeight: '700',
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        backgroundColor: '#F2F3FA',
    },
   
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    appleButton: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#0A0A0A',
    },
    googleButton: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#E72819',
    },

    linkContainer: {
        width: '100%',
        marginBottom: 25,
        alignItems: 'flex-end',
    },
    link: {
        textAlign: 'right',
        fontSize: 13,
        fontWeight: '700',
        color: '#01AAEC',
        // marginVertical: 10
    },
    SkipContainer: {
        width: 350,
        alignItems: 'flex-end',
    },
    Skip: {
        fontSize: 14,
        fontWeight: '700',
        // marginVertical: 10,
        textDecorationLine: 'underline',
        color: "rgba(31, 61, 77, 0.8)"
    },
    dividerContainer: {
        width: 366,
        flexDirection: "row",
        alignItems: "center",
        // marginVertical: 10,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "rgba(31, 61, 77, 0.3)",
        marginHorizontal: 10
    }
})


