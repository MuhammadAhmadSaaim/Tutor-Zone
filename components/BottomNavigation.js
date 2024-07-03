import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SCompleteProfileScreen from "./profileForm/studentForm/SCompleteProfileScreen";
import SCreateProfile1 from "./profileForm/studentForm/sCreateProfile1";
import SCreateProfile2 from "./profileForm/studentForm/sCreateProfile2";
import SCreateProfile3 from "./profileForm/studentForm/sCreateProfile3";
import ExploreTeachersScreen from "./studentHome/explorTeachersScreen";

const Tab = createBottomTabNavigator();

const images = {
    ExploreTeachers: {
        focused: require('../assets/graduationPurple.png'),
        unfocused: require('../assets/graduationGrey.png'),
    },
    SCreateProfile1: {
        focused: require('../assets/notificationPurple.png'),
        unfocused: require('../assets/notificationGrey.png'),
    },
    SCreateProfile3: {
        focused: require('../assets/addBlue.png'),
        unfocused: require('../assets/addGrey.png'),
    },
    SCreateProfile2: {
        focused: require('../assets/messagePurple.png'),
        unfocused: require('../assets/messageGrey.png'),
    },
    SCompleteProfileScreen: {
        focused: require('../assets/personPurple.png'),
        unfocused: require('../assets/personGrey.png'),
    },
};

function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const size = route.name === 'SCreateProfile3' ? 48 : 22;
                    const imageSource = focused ? images[route.name].focused : images[route.name].unfocused;

                    return (
                        <View style={styles.iconContainer}>
                            <Image
                                source={imageSource}
                                style={{ width: size, height: size }}
                            />
                            {focused && route.name !== 'SCreateProfile3' && (
                                <View style={styles.dotIndicator} />
                            )}
                        </View>
                    );
                },
                tabBarStyle: { height: 73, },
                headerShown: false,
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name="ExploreTeachers" component={ExploreTeachersScreen} />
            <Tab.Screen name="SCreateProfile1" component={SCreateProfile1} />
            <Tab.Screen name="SCreateProfile3" component={SCreateProfile3} />
            <Tab.Screen name="SCreateProfile2" component={SCreateProfile2} />
            <Tab.Screen name="SCompleteProfileScreen" component={SCompleteProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    dotIndicator: {
        position: 'absolute',
        top: 50,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#5973F2',
    },
});

export default BottomNavigation;
