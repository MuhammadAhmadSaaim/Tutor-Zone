import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SizedBox from "../../helperCompnents/SizedBox";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";
import TitleInputField from "../../helperCompnents/titleInputField";
import date from "../../../assets/date.png"
import down from "../../../assets/downArrow.png"

const SCreateProfile1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <SizedBox height={22} />
                <View style={styles.titleContainer}>
                    <Icon name="chevron-left" color={"#000"} size={18} style={{ marginTop: 2 }} />
                    <Text style={styles.title}>Create Your Profile</Text>
                </View>
                <SizedBox height={24} />
                <View style={styles.progressNavigationBar}>
                    <Text style={[styles.progressNavigationFont, { color: "#054BB4" }]}>Basic Info</Text>
                    <Icon2 name="right" color={"#000"} size={14} style={[styles.progressNavigationIcon, { color: "#054BB4" }]} />
                    <Text style={styles.progressNavigationFont}>Photo</Text>
                    <Icon2 name="right" color={"#000"} size={14} style={styles.progressNavigationIcon} />
                    <Text style={styles.progressNavigationFont}>Academic Info</Text>
                </View>
                <SizedBox height={20} />
                <Text style={{ fontSize: 18, fontWeight: '700', color: "#000" }}>Basic Info</Text>
                <SizedBox height={8} />
                <Text style={{ fontSize: 14, fontWeight: '400', color: "#33363B" }}>Lorem ipsum is simply dummy text of the printing and typing industry</Text>
                <SizedBox height={20} />
                <TitleInputField title="First Name" placeholder="E.g. Steve Smith" />
                <TitleInputField title="Email" placeholder="E.g. example12@gmail.com" />
                <TitleInputField title="Phone Number" placeholder="E.g. +923012345678" />
                <TitleInputField title="Age" placeholder="E.g. 22" image={down} />
                <TitleInputField title="Date of Birth" placeholder="E.g. 27 / 03 / 2002" image={date} />
                <TitleInputField title="Location" placeholder="E.g. Model Town, Lahore" />
                <SizedBox height={16} />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SCreateProfile2')}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'flex-start',
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 12,
    },
    progressNavigationFont: {
        fontSize: 14,
        fontWeight: '400',
        color: "#526270",
    },
    progressNavigationIcon: {
        marginTop: 2,
        marginLeft: 8,
        marginRight: 8,
        color: "#526270",
    },
    progressNavigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
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

export default SCreateProfile1;
