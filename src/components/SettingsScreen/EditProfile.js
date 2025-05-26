import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Images from '../Images/Images';
import GradientButton from '../Button/Button';

const EditProfile = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("John Doe");
    const [IsEditing, setIsEditing] = useState(false);

    const handleUpdateProfile = () => {
        Alert.alert("Profile Updated", "Your profile information has been successfully updated.");
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                        <Image source={Images.backarrow} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>

                <View style={styles.content}>
                    <TouchableOpacity>
                        <Image source={Images.Profile} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.profiletitle}>Change Photo</Text>
                    </TouchableOpacity>

                    {/* Display/Edit Fields */}
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Full Name"
                    />

                    {/* Action Buttons */}
                    <GradientButton
                        title={"UPDATE PORFILE"}
                        onPress={handleUpdateProfile}
                        style={styles.buttonText}
                    />

                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3FA',
    },
    header: {
        height: 60,
        backgroundColor: '#2C398B',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    backIcon: {
        height: 20,
        width: 20,
        tintColor: '#FFFFFF'
    },
    headerTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        marginLeft: 15,
    },
    profiletitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: '#01AAEC',
        textDecorationLine: 'underline',
    },
    content: {
        minHeight: 730,
        margin: 10,
        alignItems: 'center',
        borderRadius: 15,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: '#1F3D4D1A',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 8,
        color: '#1F3D4D',
    },

    buttonText: {
        position: 'absolute',
        bottom: 20,
        width: 'auto',
        color: '#FFFFFF',
        fontWeight: '600',
    },
});
