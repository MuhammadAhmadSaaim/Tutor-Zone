import SignUpScreen from "./components/signupScreen";
import SplashScreen from "./components/splashScreen";
import LogInScreen from "./components/loginScreen";
import ForgetPasswoordScreen1 from "./components/forgetPassword1";
import ForgetPasswoordScreen2 from "./components/forgetPassword2";
import SetUpNewPasswordScreen from "./components/setUpNewPasswordScreen";
import PasswordChangedScreen from "./components/passwordChangedScreen";
import SelectUserScreen from "./components/SelectUserScreen";
import SCreateProfile1 from "./components/profileForm/studentForm/sCreateProfile1";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SCreateProfile1">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="ForgetPasswoordScreen1" component={ForgetPasswoordScreen1} />
        <Stack.Screen name="ForgetPasswoordScreen2" component={ForgetPasswoordScreen2} />
        <Stack.Screen name="SetUpNewPasswordScreen" component={SetUpNewPasswordScreen} />
        <Stack.Screen name="PasswordChangedScreen" component={PasswordChangedScreen} />
        <Stack.Screen name="SelectUserScreen" component={SelectUserScreen} />
        <Stack.Screen name="SCreateProfile1" component={SCreateProfile1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

