import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SignUpScreen from "./components/signupScreen";
import SplashScreen from "./components/splash_screen";
import LogInScreen from "./components/loginScreen";
import ForgetPasswoordScreen1 from "./components/forgetPassword1";
import ForgetPasswoordScreen2 from "./components/forgetPassword2";
import SetUpNewPasswordScreen from "./components/setUpNewPasswordScreen";
import PasswordChangedScreen from "./components/passwordChangedScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <PasswordChangedScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
});
