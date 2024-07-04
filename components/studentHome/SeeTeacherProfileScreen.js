import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SizedBox from "../helperCompnents/SizedBox";


const SeeTeacherProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.bgImage} source={require('../../assets/background.png')} />
                <Image style={[styles.backDropButton, { top: 40, left: 10 }]} source={require('../../assets/backArrow.png')} />
                <Image style={[styles.backDropButton, { top: 250, right: 50 }]} source={require('../../assets/messageWhite.png')} />
                <Image style={[styles.backDropButton, { top: 250, right: 10 }]} source={require('../../assets/playButton.png')} />
                <SizedBox height={20} />
                <View style={{ paddingLeft: 16, paddingRight: 16, }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/man1.png')} style={{ height: 68, width: 68, marginRight: 12, }} />
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 500, }}>Peter Park</Text>
                            <SizedBox height={4} />
                            <Text style={{ fontSize: 14, color: "#526270", fontWeight: 400 }}>peterpark12@gmail.com</Text>
                            <SizedBox height={4} />
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../../assets/Location.png')} style={{ width: 14, height: 14, marginRight: 8, marginTop: 2 }} />
                                <Text style={{ fontSize: 14, color: "#33363B", fontWeight: 400 }}>Lahore</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ position: 'relative', height: 1, backgroundColor: '#DDDDDD', marginVertical: 20, }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: "500", alignSelf: "center" }}>BS Computer</Text>
                            <Text style={{ fontSize: 12, color: "#526270", alignSelf: "center" }}>Education</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: "500", alignSelf: "center" }}>5 Year</Text>
                            <Text style={{ fontSize: 12, color: "#526270", alignSelf: "center" }}>Experience</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: "500", alignSelf: "center" }}>+92 3012345678</Text>
                            <Text style={{ fontSize: 12, color: "#526270", alignSelf: "center" }}>Education</Text>
                        </View>
                    </View>
                    <View style={{ position: 'relative', height: 1, backgroundColor: '#DDDDDD', marginVertical: 20, }} />


                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'flex-start',
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    bgImage: {
        marginTop: 30,
        width: Dimensions.get('window').width,
        height: 275,
        resizeMode: 'cover',
    },
    backDropButton: {
        position: 'absolute',
        width: 20,
        height: 20,
        margin: 10,
    },
});

export default SeeTeacherProfileScreen;
