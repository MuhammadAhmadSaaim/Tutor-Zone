import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');


const SCompleteProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/greenCircledTick.png')} />

            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.title}>Your Profile Has Been Created Successfully!</Text>
                    <Text style={styles.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.createButton} onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'DrawerNavigator' }],
                    })}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: '#fff',

    },
    subContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        marginTop: height / 3,
        marginBottom: 24,
        height: 70,
        width: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 8,
        textAlign: 'center',
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

export default SCompleteProfileScreen;
