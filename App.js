import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SignUpScreen from "./components/signupScreen";
import SplashScreen from "./components/splash_screen";
import LogInScreen from "./components/loginScreen";
import ForgetPasswoordScreen1 from "./components/forgetPassword1";
import ForgetPasswoordScreen2 from "./components/forgetPassword2";
import SetUpNewPasswordScreen from "./components/setUpNewPasswordScreen";
import PasswordChangedScreen from "./components/passwordChangedScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="ForgetPasswoordScreen1" component={ForgetPasswoordScreen1} />
        <Stack.Screen name="ForgetPasswoordScreen2" component={ForgetPasswoordScreen2} />
        <Stack.Screen name="SetUpNewPasswordScreen" component={SetUpNewPasswordScreen} />
        <Stack.Screen name="PasswordChangedScreen" component={PasswordChangedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

