import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import SignUpScreen from "./components/signupScreen";
import SplashScreen from "./components/splashScreen";
import LogInScreen from "./components/loginScreen";
import ForgetPasswoordScreen1 from "./components/forgetPassword1";
import ForgetPasswoordScreen2 from "./components/forgetPassword2";
import SetUpNewPasswordScreen from "./components/setUpNewPasswordScreen";
import PasswordChangedScreen from "./components/passwordChangedScreen";
import SelectUserScreen from "./components/SelectUserScreen";
import SCreateProfile1 from "./components/profileForm/studentForm/sCreateProfile1";
import SCreateProfile2 from "./components/profileForm/studentForm/sCreateProfile2";
import SCompleteProfileScreen from "./components/profileForm/studentForm/SCompleteProfileScreen";
import SCreateProfile3 from "./components/profileForm/studentForm/sCreateProfile3";
import ExploreTeachersScreen from "./components/studentHome/explorTeachersScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeTabs">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="ForgetPasswoordScreen1" component={ForgetPasswoordScreen1} />
        <Stack.Screen name="ForgetPasswoordScreen2" component={ForgetPasswoordScreen2} />
        <Stack.Screen name="SetUpNewPasswordScreen" component={SetUpNewPasswordScreen} />
        <Stack.Screen name="PasswordChangedScreen" component={PasswordChangedScreen} />
        <Stack.Screen name="SelectUserScreen" component={SelectUserScreen} />
        <Stack.Screen name="SCreateProfile1" component={SCreateProfile1} />
        <Stack.Screen name="SCreateProfile2" component={SCreateProfile2} />
        <Stack.Screen name="SCreateProfile3" component={SCreateProfile3} />
        <Stack.Screen name="SCompleteProfileScreen" component={SCompleteProfileScreen} />
        <Stack.Screen name="ExploreTeachersScreen" component={ExploreTeachersScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
