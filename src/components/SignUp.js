import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import GradientButton from './Button/Button';
import images from "./Images/Images";

const SignUp = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log("Sign Up clicked!");
        navigation.navigate('Login');
    };

    const handleSkip = () => {
        console.log("Skip clicked!");
        navigation.navigate('BottomTabNavigation');
    }

    const Policy = () => {
        console.log("Policy clicked!");
        navigation.navigate('Policy');
    }

    return (
       <ScrollView>
         <View style={styles.container}>
            <TouchableOpacity onPress={() => handleSkip()}>
                <Image source={images.Logo1} style={styles.image} />
            </TouchableOpacity>

            <View style={styles.inputView}>
                <Text style={styles.text}>Let’s Get Started!</Text>
                <Text style={styles.subtext}>Create an account  to get full access</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Full Name" style={styles.form} />
                <Fontisto name="person" size={20} color="#000000" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.form} />
                <Icon name="mail" size={20} color="#000000" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Password" secureTextEntry style={styles.form} />
                <Icon name="key" size={20} color="#000000" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Confirm Password" secureTextEntry style={styles.form} />
                <Icon name="key" size={20} color="#000000" style={styles.inputIcon} />
            </View>
            <GradientButton title={"Sign Up"} onPress={() => handleLogin()} />

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.subtext1}>OR</Text>
                <View style={styles.divider} />
            </View>

            <TouchableOpacity style={[styles.button, styles.appleButton]}>
                <Icon name="apple1" size={24} color="#fff" />
                <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.googleButton]}>
                <Icon name="google" size={24} color="#fff" />
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.subtext1}>Already have an account?</Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.link}>&nbsp;Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.PolicyContainer}>
                <Text style={styles.subtext2}>By signing up, you agree to our</Text>
                <TouchableOpacity onPress={Policy}>
                    <Text style={styles.link1}>Terms & Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.SkipContainer}>
                <TouchableOpacity onPress={() => handleSkip()}>
                    <Text style={styles.Skip}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
       </ScrollView>
    )
}

export default SignUp

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
        marginBottom: 15,
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

    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
   
    inputIcon: {       
        padding: 15,
        position: 'absolute',
        color: "rgba(31, 61, 77, 0.6)"
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
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    subtext1: {
        fontWeight: '700',
        fontSize: 14,
        textAlign: "center",
        color: "rgba(31, 61, 77, 0.5)",
        marginVertical: 5,
    },
    link: {
        fontSize: 13,
        fontWeight: '700',
        color: '#01AAEC',
    },
    PolicyContainer: {
        alignItems: 'center',
        margin: 0
    },
    subtext2: {
        fontWeight: '700',
        fontSize: 12,
        textAlign: "center",
        color: "rgba(31, 61, 77, 0.5)",
    },
    link1: {
        fontSize: 12,
        fontWeight: '700',
        color: '#01AAEC',
    },
    SkipContainer: {
        width: 350,
        alignItems: 'flex-end',
    },
    Skip: {
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 10,
        textDecorationLine: 'underline',
        color: "rgba(31, 61, 77, 0.8)"
    },
})
