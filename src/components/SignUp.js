import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import GradientButton from './Button/Button';
import images from "./Images/Images";
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({ colors = ['#2C398B', '#01AAEC'] }) => {
    const navigation = useNavigation();

    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const [errormsg, seterrormsg] = useState(null);
    // const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (name, value) => {
        setFdata((prev) => ({
            ...prev,
            [name]: value,
        }));
        seterrormsg(null);
    };

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    const sendToBackend = () => {
        console.log(fdata)
        // const { name, email, password, confirmpassword } = fdata;

        if (fdata.name == '' ||
            fdata.email == '' ||
            fdata.password == '' ||
            fdata.confirmpassword == '') {
            seterrormsg("Please fill all the fields");
            return;
        }
        else {
            if (fdata.password != fdata.confirmpassword) {
                seterrormsg('Password and Confirm Password must be same');
                return;
            }
            else {
                fetch('http://192.168.0.108:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fdata),
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        // Token Created
                        // console.log(data); 
                        
                        if (data.error) {
                            seterrormsg(data.error);
                        } else {
                            Alert.alert('Success','Account created successfully');
                            console.log('Account created successfully')
                            navigation.navigate('Login');
                        }
                    }
                    )
                    .catch((error) => {
                        console.log(error)
                        seterrormsg("Something went wrong. Try again.");
                        setIsSubmitting(false);
                    });
            }
        }
    };

    const handleSkip = () => {
        navigation.navigate('BottomTabNavigation');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <TouchableOpacity>
                <Image source={images.Logo1} style={styles.image} />
            </TouchableOpacity>

            <Text style={styles.text}>Let’s Get Started!</Text>
            <Text style={styles.subtext}>Create an account to get full access</Text>

            {errormsg && <Text style={{ fontSize: 15, color: 'red', backgroundColor: "#01AAEC", padding: 5, borderRadius: 10, width: "100%", textAlign: "center", }}>{errormsg}</Text>}

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Full Name"
                    style={styles.form}
                    value={fdata.name}
                    onChangeText={(text) => handleInputChange('name', text)} />
                <Fontisto name="person" size={20} color="rgba(31, 61, 77, 0.6)" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.form}
                    value={fdata.email}
                    keyboardType="email-address"
                    onChangeText={(text) => handleInputChange('email', text)} />
                <Icon name="mail" size={20} color="rgba(31, 61, 77, 0.6)" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={styles.form}
                    value={fdata.password}
                    onChangeText={(text) => handleInputChange('password', text)} />
                <Icon name="key" size={20} color="rgba(31, 61, 77, 0.6)" style={styles.inputIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.form}
                    value={fdata.confirmpassword}
                    onChangeText={(text) => handleInputChange('confirmpassword', text)} />
                <Icon name="key" size={20} color="rgba(31, 61, 77, 0.6)" style={styles.inputIcon} />
            </View>

            <TouchableOpacity style={styles.button} onPress={sendToBackend}>
                <LinearGradient
                    colors={colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.priceButton}
                >
                    <Text style={styles.priceText}>SignUp</Text>
                </LinearGradient>
            </TouchableOpacity>


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
                <TouchableOpacity onPress={() => handleNavigation('Login')}>
                    <Text style={styles.link}> Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.PolicyContainer}>
                <Text style={styles.subtext2}>By signing up, you agree to our</Text>
                <TouchableOpacity onPress={() => handleNavigation('Privacy Policy')}>
                    <Text style={styles.link1}>Terms & Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.SkipContainer}>
                <TouchableOpacity onPress={handleSkip}>
                    <Text style={styles.Skip}>Skip</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        marginBottom: 8,
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
        marginVertical: 5,
        justifyContent: 'center',
    },
    form: {
        height: 50,
        fontSize: 14,
        fontWeight: '700',
        borderRadius: 8,
        paddingHorizontal: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#F2F3FA',
    },
    inputIcon: {
        position: 'absolute',
        left: 10,
        top: 15,
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
    priceButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 8,
    },
    priceText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
        textTransform: 'uppercase'
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

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        // marginLeft: 10,
    },
    appleButton: {
        backgroundColor: '#0A0A0A',
    },
    googleButton: {
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
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    Skip: {
        fontSize: 14,
        fontWeight: '700',
        textDecorationLine: 'underline',
        color: "rgba(31, 61, 77, 0.8)"
    },
})