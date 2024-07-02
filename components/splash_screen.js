import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('LogInScreen'); // Navigate to login screen
        }, 3000); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(timer);
    }, []);

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
