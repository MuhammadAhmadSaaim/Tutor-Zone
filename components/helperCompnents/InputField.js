import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const InputField = ({ placeholder, image }) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    secureTextEntry
                />
                <Image style={styles.socialButtonImage} source={image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: '#F9F9F9',
        color: '#424242',
        paddingRight: 180,
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        borderColor: '#ccc',
        padding: 10,
        borderWidth: 1,
        borderRadius: 12,
    },
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});

export default InputField;
