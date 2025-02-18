import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from "../components/authentication/signupScreen";
import SplashScreen from "../components/authentication/splashScreen";
import LogInScreen from "../components/authentication/loginScreen";
import ForgetPasswoordScreen1 from "../components/authentication/forgetPassword1";
import ForgetPasswoordScreen2 from "../components/authentication/forgetPassword2";
import SetUpNewPasswordScreen from "../components/authentication/setUpNewPasswordScreen";
import PasswordChangedScreen from "../components/authentication/passwordChangedScreen";
import SelectUserScreen from "../components/profileForm/SelectUserScreen";
import SCreateProfile1 from "../components/profileForm/studentForm/sCreateProfile1";
import SCreateProfile2 from "../components/profileForm/studentForm/sCreateProfile2";
import SCompleteProfileScreen from "../components/profileForm/studentForm/SCompleteProfileScreen";
import SCreateProfile3 from "../components/profileForm/studentForm/sCreateProfile3";
import ExploreTeachersScreen from "../components/studentHome/explorTeachersScreen";
import DrawerNavigator from "../components/DrawerNavigation";
import SeeTeacherProfileScreen from "./studentHome/SeeTeacherProfileScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DrawerNavigator">
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
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                <Stack.Screen name="SeeTeacherProfileScreen" component={SeeTeacherProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}