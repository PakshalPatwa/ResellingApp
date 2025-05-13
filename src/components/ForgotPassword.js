import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import GradientButton from './Button/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import images from "./Images/Images";

const Login = () => {
    const navigation = useNavigation();

    // const handleForgotPassword = () => {
    //     console.log("Forgot Password clicked!");
    //     navigation.navigate('ForgotPassword');
    // };

    const handleSignUP = () => {
        console.log("Sign Up clicked!");
        navigation.navigate('SignUp');
    };

    // const handleSkip = () => {
    //     console.log("Skip clicked!");
    //     navigation.navigate('Home');
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={images.Forgot_password} style={styles.image} />
            </TouchableOpacity>

            <View>
                <Text style={styles.text}>Enter email address below to reset password</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.form} />
                <Icon name="mail" size={20} color="#000000" style={styles.inputIcon} />
            </View>

            <GradientButton title={"Reset password"} onPress={() => handleSignUP()}/>

            <View style={styles.signupContainer}>
                <Text style={styles.subtext1}>Remember password? </Text>
                <TouchableOpacity onPress={handleSignUP}>
                    <Text style={styles.link}>Sign In</Text>
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
        width: 300,
        height: 240,
        marginBottom: 40,
    },
  
    text: {
        fontWeight: '500',
        fontSize: 16,
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
        margin:20,
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
        width: 366,
        height: 48,
        fontSize: 14,
        fontWeight: '700',
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        backgroundColor: '#F2F3FA',
    },
    button: {
        width: 366,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#1F3D4D',
    },
    appleButton: {
        backgroundColor: '#000',
    },
    googleButton: {
        backgroundColor: '#DB4437',
    },
    gradientButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonLogin: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    linkContainer: {
        width: 366,
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    link: {
        fontSize: 13,
        fontWeight: '700',
        color: '#01AAEC',
        marginVertical: 10
    },
    SkipContainer: {
        width: 366,
        alignItems: 'flex-end',
    },
    Skip: {
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 10,
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
        backgroundColor: "rgba(31, 61, 77, 0.3)", // Adjust opacity for visibility
        marginHorizontal: 10
    }
})
