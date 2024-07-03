import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ForgetPasswoordScreen1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imageLogo} source={require('../../assets/logoGrey.png')} />
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subTitle}>No worries, we'll send you instructions for reset</Text>

                <Text style={styles.inputTitle}>Email Address</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter Email Address"
                    />
                    <Image style={styles.socialButtonImage} source={require('../../assets/email.png')} />
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('ForgetPasswoordScreen2')}>
                    <Text style={styles.buttonText}>Reset Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButtons} onPress={() => navigation.goBack()}>
                    <Text style={styles.socialButtonText}> Back To Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-between',
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    imageLogo: {
        marginTop: 30,
        marginBottom: 16,
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 16,
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 14,
    },
    inputText: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        color: '#424242',
    },
    inputContainer: {
        backgroundColor: '#F9F9F9',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    createButton: {
        padding: 8,
        height: 48,
        backgroundColor: '#054BB4',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    socialButtonText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
    },
    socialButtons: {
        flexDirection: 'row',
        padding: 8,
        height: 48,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
});

export default ForgetPasswoordScreen1;
