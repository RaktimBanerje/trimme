import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from "./navigators/stacks/Welcome"
import PhoneLogin from './screens/PhoneLogin';
import OTPVerification from './screens/OTPVerification';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <Welcome />       */}
      {/* <OTPVerification /> */}
      <PhoneLogin />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
