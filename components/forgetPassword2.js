import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SeparatorOR from "./helperWidgets/seperatorOr";


const ForgetPasswoordScreen2 = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imageLogo} source={require('../assets/logoGrey.png')} />
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subTitle}>We've sent reset password link to your email</Text>
                <Text style={styles.subTitle}>alisonh952@gmail.com</Text>


            </View>

            <View>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButtons}>
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
        marginBottom: 8,
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
});

export default ForgetPasswoordScreen2;
