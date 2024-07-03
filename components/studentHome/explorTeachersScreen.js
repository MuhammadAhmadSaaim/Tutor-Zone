import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SizedBox from "../helperCompnents/SizedBox";
import InputField from "../helperCompnents/InputField";
import search from "../../assets/search.png"



const ExploreTeachersScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <SizedBox height={20} />
                <View style={styles.appbar}>
                    <Image source={require("../../assets/userIcon.png")} style={styles.appbarImage} />
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>Explore Teachers</Text>
                    <Image source={require("../../assets/drawerIcon.png")} style={styles.appbarImage} />
                </View>
                <SizedBox height={24} />
                <View style={styles.searchRow}>
                    <InputField placeholder="Search Tutor" image={search} />
                    <Image source={require("../../assets/filters.png")} style={{ width: 48, height: 48 }} />
                </View>
                <SizedBox height={20} />
                <View style={styles.appbar}>
                    <Text style={{ fontSize: 14, color: "#526270" }}>
                        18506 Tutors
                    </Text>
                    <View style={styles.appbar}>
                        <Text style={{ fontSize: 14, color: "#526270", marginRight: 5 }}>
                            Sort By Relevance
                        </Text>
                        <Image source={require("../../assets/sort.png")} style={{ width: 16, height: 16 }} />
                    </View>
                </View>

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
    appbarImage: {
        width: 30,
        height: 30,
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ExploreTeachersScreen;
