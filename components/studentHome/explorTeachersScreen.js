import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SizedBox from "../helperCompnents/SizedBox";
import InputField from "../helperCompnents/InputField";
import search from "../../assets/search.png"
import man1 from "../../assets/man1.png"
import man2 from "../../assets/man2.png"
import man3 from "../../assets/man3.png"
import man4 from "../../assets/man4.png"
import TeacherCard from "../helperCompnents/TeacherCard";

const ExploreTeachersScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <SizedBox height={20} />
                <View style={styles.appbar}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image source={require("../../assets/userIcon.png")} style={styles.appbarImage} />
                    </TouchableOpacity>
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
                <View style={styles.line} />
                <SizedBox height={16} />

                <TeacherCard
                    imageUrl={man1}
                    name="Russell M."
                    location="Lahore, Pakistan"
                    experience="5"
                    education="BS Computer"
                    phoneNumber="+92 304567898"
                    description="TEFL Certified English Teacher With 5 Years Experience"
                    languages={["Speaking English (Native),", "+2"]}
                    isFavorite={true}
                />
                <TeacherCard
                    imageUrl={man2}
                    name="Russell M."
                    location="Lahore, Pakistan"
                    experience="5"
                    education="BS Computer"
                    phoneNumber="+92 304567898"
                    description="TEFL Certified English Teacher With 5 Years Experience"
                    languages={["Speaking English (Native),", "+2"]}
                    isFavorite={true}
                />
                <TeacherCard
                    imageUrl={man3}
                    name="Russell M."
                    location="Lahore, Pakistan"
                    experience="5"
                    education="BS Computer"
                    phoneNumber="+92 304567898"
                    description="TEFL Certified English Teacher With 5 Years Experience"
                    languages={["Speaking English (Native),", "+2"]}
                    isFavorite={true}
                />
                <TeacherCard
                    imageUrl={man4}
                    name="Russell M."
                    location="Lahore, Pakistan"
                    experience="5"
                    education="BS Computer"
                    phoneNumber="+92 304567898"
                    description="TEFL Certified English Teacher With 5 Years Experience"
                    languages={["Speaking English (Native),", "+2"]}
                    isFavorite={true}
                />

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
        marginTop: 1,
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
    line: {
        position: 'relative',
        top: 14,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#DDDDDD',
        marginBottom: 20,
    },
});

export default ExploreTeachersScreen;
