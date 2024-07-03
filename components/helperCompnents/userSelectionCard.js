import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SelectUserCard = ({ imageSrc, text, borderColor }) => {
    return (
        <TouchableOpacity style={[styles.container, { borderColor }]}>
            <Image source={imageSrc} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 11,
        height: 64,
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#EBF0FC',
    },
    image: {
        width: 42,
        height: 42,
        marginRight: 11,
    },
    text: {
        fontSize: 14,
    },
});

export default SelectUserCard;
