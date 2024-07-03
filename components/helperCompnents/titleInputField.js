import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const TitleInputField = ({ title, placeholder, image }) => {
    return (
        <View>
            <Text style={styles.inputTitle}>{title}</Text>
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
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});

export default TitleInputField;
