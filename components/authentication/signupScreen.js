import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SeparatorOR from "../helperCompnents/seperatorOr";


const SignUpScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.imageLogo} source={require('../../assets/logoGrey.png')} />
            <Text style={styles.title}>Sign Up Now!</Text>
            <Text style={styles.subTitle}>Lorem ipsum is simpy dumy text of printing and typing industry</Text>

            <Text style={styles.inputTitle}>User Name</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter User Name"
                />
                <Image style={styles.socialButtonImage} source={require('../../assets/user.png')} />
            </View>

            <Text style={styles.inputTitle}>Email Address</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Email Address"
                />
                <Image style={styles.socialButtonImage} source={require('../../assets/email.png')} />
            </View>

            <Text style={styles.inputTitle}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Password"
                />
                <Image style={styles.socialButtonImage} source={require('../../assets/password.png')} />
            </View>

            <TouchableOpacity style={styles.createButton} onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'SelectUserScreen' }],
            })}>
                <Text style={styles.buttonText}>Create An Account</Text>
            </TouchableOpacity>
            <SeparatorOR />
            <TouchableOpacity style={styles.socialButtons}>
                <Image style={styles.socialButtonImage} source={require('../../assets/google.png')} />
                <Text style={styles.socialButtonText}> Continue With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButtons}>
                <Image style={styles.socialButtonImage} source={require('../../assets/facebook.png')} />
                <Text style={styles.socialButtonText}>Continue With Facebook</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.logIntext}>Already have an account?</Text>
                <TouchableOpacity style={styles.textButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.textButtonText}>Log In</Text>
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
        justifyContent: 'flex-start',
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
        borderRadius: 12,
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
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logIntext: {
        color: '#8E8E8E',
        fontSize: 14,
        fontWeight: '400',
    },
    textButton: {
        padding: 8,
    },
    textButtonText: {
        color: '#054BB4',
        fontSize: 14,
        fontWeight: '400',
    },
});

export default SignUpScreen;
