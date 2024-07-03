import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import SCompleteProfileScreen from "./profileForm/studentForm/SCompleteProfileScreen";
import SCreateProfile1 from "./profileForm/studentForm/sCreateProfile1";
import SCreateProfile2 from "./profileForm/studentForm/sCreateProfile2";
import SCreateProfile3 from "./profileForm/studentForm/sCreateProfile3";
import ExploreTeachersScreen from "./studentHome/explorTeachersScreen";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconSize = 20;

                    if (route.name === 'ExploreTeachers') {
                        iconName = focused ? 'graduation-cap' : 'graduation-cap';
                    } else if (route.name === 'SCreateProfile1') {
                        iconName = focused ? 'bell' : 'bell';
                    } else if (route.name === 'SCreateProfile3') {
                        iconName = focused ? 'plus' : 'plus';
                    } else if (route.name === 'SCreateProfile2') {
                        iconName = focused ? 'commenting-o' : 'commenting-o';
                    } else if (route.name === 'SCompleteProfileScreen') {
                        iconName = focused ? 'user-o' : 'user-o';
                    }

                    if (iconName === 'plus') {
                        return (
                            <View style={{
                                width: iconSize + 20,
                                height: iconSize + 20,
                                borderRadius: (iconSize + 20) / 2,
                                backgroundColor: '#EBF0FC',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icon name={iconName} size={iconSize} color="#054BB4" />
                            </View>
                        );
                    }

                    return (
                        <View style={{ alignItems: 'center' }}>
                            <Icon name={iconName} size={iconSize} color={color} />
                            {focused && <View style={{
                                position: 'absolute',
                                top: 0,
                                width: 6,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: '#5973F2',
                                marginTop: 30
                            }} />}
                        </View>
                    );
                },
                tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 5 },
                tabBarActiveTintColor: '#5973F2',
                tabBarInactiveTintColor: '#526270',
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

export default BottomNavigation;
