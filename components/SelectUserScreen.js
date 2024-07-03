import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SelectUserScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingBottom: 10,
        backgroundColor: '#fff',
    }
});

export default SelectUserScreen;
