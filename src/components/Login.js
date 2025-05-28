import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
// import GradientButton from './Button/Button';
import images from "./Images/Images";
import LinearGradient from 'react-native-linear-gradient';

const Login = ({ colors = ['#2C398B', '#01AAEC'] }) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Both fields are required!');
            return;
        }
        console.log('Login clicked!');
        navigation.navigate('BottomTabNavigation');
    };

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };
    const handleSkip = () => {
        navigation.navigate('BottomTabNavigation');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={images.Logo1} style={styles.image} />
            </TouchableOpacity>

            <Text style={styles.text}>Welcome Back!</Text>
            <Text style={styles.subtext}>Please sign in to continue</Text>

            <View style={styles.inputContainer}>
                <Icon name="mail" size={20} color="#000000" style={styles.inputIcon} />
                <TextInput
                    placeholder="Email"
                    style={styles.form}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="key" size={20} color="#000000" style={styles.inputIcon} />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={styles.form}
                    value={password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => handleNavigation('ForgotPassword')}>
                    <Text style={styles.link}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <LinearGradient
                    colors={colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.priceButton}
                >
                    <Text style={styles.priceText}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>

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
                <TouchableOpacity onPress={() => handleNavigation('SignUp')}>
                    <Text style={styles.link}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.SkipContainer}>
                <TouchableOpacity onPress={handleSkip}>
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
        paddingHorizontal: 5,
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
    },
    subtext1: {
        fontWeight: '700',
        fontSize: 14,
        textAlign: "center",
        color: "rgba(31, 61, 77, 0.6)",
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F2F3FA',
        borderColor: '#ccc',
        marginVertical: 5,
        paddingHorizontal: 10,
        height: 50
    },
    inputIcon: {
        color: "rgba(31, 61, 77, 0.6)"
    },
    form: {
        flex: 1,
        fontSize: 14,
        fontWeight: '700',
        paddingLeft: 10,
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
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    link: {
        width: '100%',
        alignItems: 'flex-end',
        fontSize: 13,
        fontWeight: '700',
        color: '#01AAEC',
        // marginVertical: 10
    },
    button: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#1F3D4D',
    },
    priceButton: {
        width: '100%',
        height: 50,
        // flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 8,
        // marginVertical: 5,
    },

    priceText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
        textTransform: 'uppercase'
    },
    dividerContainer: {
        width: 366,
        flexDirection: "row",
        alignItems: "center",
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "rgba(31, 61, 77, 0.3)",
        marginHorizontal: 10
    },
    SkipContainer: {
        width: '100%',
        alignItems: 'flex-end',
    },
    Skip: {
        fontSize: 14,
        fontWeight: '700',
        textDecorationLine: 'underline',
        color: "rgba(31, 61, 77, 0.8)"
    }
})