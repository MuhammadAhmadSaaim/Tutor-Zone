import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/splashScreen.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: width,
        height: height,
        resizeMode: 'cover',
    },
});

export default SplashScreen;
