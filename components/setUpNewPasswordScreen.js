import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


const SetUpNewPasswordScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imageLogo} source={require('../assets/logoGrey.png')} />
                <Text style={styles.title}>Set A New Password</Text>
                <Text style={styles.subTitle}>New password must be different from your previous used passwords</Text>

                <Text style={styles.inputTitle}>Enter New Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter New Password"
                    />
                    <Image style={styles.socialButtonImage} source={require('../assets/password.png')} />
                </View>

                <Text style={styles.inputTitle}>Confirm New Password</Text>
                <View style={styles.inputContainer2}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Confirm New Password"
                    />
                    <Image style={styles.socialButtonImage} source={require('../assets/password.png')} />
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.buttonText}>Reset Password</Text>
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
        marginBottom: 20,
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
    inputContainer2: {
        backgroundColor: '#F9F9F9',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 12,
    },
    forgetPassword: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'right',
        marginBottom: 16,
        textDecorationLine: 'underline',
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

export default SetUpNewPasswordScreen;
