import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SizedBox from './helperCompnents/SizedBox';
import SelectUserCard from "./helperCompnents/userSelectionCard";
import teacher from "../assets/teacher.png"
import student from "../assets/student.png"


const SelectUserScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logoStyle} source={require('../assets/logoText.png')} />
                <SizedBox height={40} />
                <Text style={styles.subtitle}>Join as a Teacher or Student</Text>
                <SizedBox height={20} />
                <SelectUserCard imageSrc={teacher} text="I am a Teacher" borderColor="#EBF0FC" />
                <SizedBox height={20} />
                <SelectUserCard imageSrc={student} text="I am a Student" borderColor="#054BB4" />
            </View>
            <View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Continue</Text>
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
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    logoStyle: {
        marginTop: 100,
        width: 130,
        height: 65,
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '400',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonStyle: {
        padding: 8,
        height: 48,
        backgroundColor: '#054BB4',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
});

export default SelectUserScreen;
