import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from "./BottomNavigation";
import SizedBox from "./helperCompnents/SizedBox";

const Drawer = createDrawerNavigator();

function DrawerContent() {
    return (
        <View style={{ paddingTop: 40, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, justifyContent: 'space-between', flex: 1 }}>
            <View>
                <Image source={require("../assets/userIcon.png")} style={{ height: 48, width: 48, }} />
                <SizedBox height={12} />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Peter Park</Text>
                <SizedBox height={6} />
                <Text style={{ fontSize: 12, color: "#526270", fontWeight: 400 }}>peterpark12@gmail.com</Text>
                <SizedBox height={16} />
                <View style={styles.line} />
                <Text style={{ fontSize: 14, color: "#526270", fontWeight: 500 }}>MENU</Text>
                <SizedBox height={16} />

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/education.png")} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <Text>Saved Teachers</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/rightArrow.png")} style={{ height: 18, width: 18, alignItems: "center" }} />
                    </View>
                </TouchableOpacity>
                <SizedBox height={24} />

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/briefcase.png")} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <Text>Posted Jobs</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/rightArrow.png")} style={{ height: 18, width: 18, alignItems: "center" }} />
                    </View>
                </TouchableOpacity>
                <SizedBox height={24} />

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/messages2.png")} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <Text>Messages</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/rightArrow.png")} style={{ height: 18, width: 18, alignItems: "center" }} />
                    </View>
                </TouchableOpacity>
                <SizedBox height={24} />

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/setting.png")} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <Text>Account Settings</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/rightArrow.png")} style={{ height: 18, width: 18, alignItems: "center" }} />
                    </View>
                </TouchableOpacity>
                <SizedBox height={24} />

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/info.png")} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <Text>About Us</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/rightArrow.png")} style={{ height: 18, width: 18, alignItems: "center" }} />
                    </View>
                </TouchableOpacity>
                <SizedBox height={24} />

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/information.png")} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <Text>Terms of Use</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/rightArrow.png")} style={{ height: 18, width: 18, alignItems: "center" }} />
                    </View>
                </TouchableOpacity>
                <SizedBox height={24} />
            </View>
            <View>
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'LogInScreen' }],
                })}
                >
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        position: 'relative',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#DDDDDD',
        marginBottom: 16,
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
});

function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;