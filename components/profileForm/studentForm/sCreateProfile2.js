import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SizedBox from "../../helperCompnents/SizedBox";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";

const SCreateProfile2 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <SizedBox height={22} />
                <View style={styles.titleContainer}>
                    <Icon name="chevron-left" color={"#000"} size={18} style={{ marginTop: 2 }} />
                    <Text style={styles.title}>Create Your Profile</Text>
                </View>
                <SizedBox height={24} />

                <View style={styles.progressNavigationBar}>
                    <Text style={[styles.progressNavigationFont, { color: "#054BB4" }]}>Basic Info</Text>
                    <Icon2 name="right" color={"#000"} size={14} style={[styles.progressNavigationIcon, { color: "#054BB4" }]} />
                    <Text style={[styles.progressNavigationFont, { color: "#054BB4" }]}>Photo</Text>
                    <Icon2 name="right" color={"#000"} size={14} style={[styles.progressNavigationIcon, { color: "#054BB4" }]} />
                    <Text style={styles.progressNavigationFont}>Academic Info</Text>
                </View>

                <SizedBox height={20} />
                <Text style={{ fontSize: 18, fontWeight: '700', color: "#000" }}>Profile Photo</Text>
                <SizedBox height={8} />
                <Text style={{ fontSize: 14, fontWeight: '400', color: "#33363B" }}>Lorem ipsum is simply dummy text of the printing and typing industry</Text>
                <SizedBox height={20} />
                <TouchableOpacity style={styles.outline}>
                    <Text style={{ color: "#526270", fontSize: 14, textAlign: "center" }}>Upload Photo</Text>
                </TouchableOpacity>
                <SizedBox height={12} />
                <Text style={{ textAlign: "center", color: "#33363B", fontSize: 14 }}>JPG or PNG format, Maximum 5 MB</Text>
                <SizedBox height={16} />
                <Text style={{ fontSize: 14, fontWeight: "500" }}>Upload Preview</Text>
                <SizedBox height={16} />

                <View style={styles.imageCard}>
                    <Image source={require("../../../assets/man1.png")} style={{ width: 100, height: 100, marginRight: 14 }} />
                    <Image source={require("../../../assets/blurredLines.png")} style={{ width: 210, height: 100 }} />
                </View>
            </View>

            <View style={styles.buttonBar}>
                <TouchableOpacity style={styles.outlineButtonStyle} onPress={() => navigation.goBack()}>
                    <Text style={styles.outlineButtonText}>Previous</Text>
                </TouchableOpacity>
                <View style={{ width: 10 }} />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SCreateProfile3')}>
                    <Text style={styles.buttonText}>Next</Text>
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
    outline: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: "#F9F9F9",
        borderColor: "#DDDDDD",
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#DDDDDD",
        backgroundColor: "#F9F9F9",
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    buttonStyle: {
        flex: 1,
        padding: 8,
        height: 48,
        backgroundColor: '#054BB4',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    outlineButtonText: {
        color: '#33363B',
        fontSize: 14,
        fontWeight: '500',
    },
    outlineButtonStyle: {
        flex: 1,
        padding: 8,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#33363B',
    },
});

export default SCreateProfile2;
