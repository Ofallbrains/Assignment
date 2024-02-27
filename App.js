import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyConverter from './Components/CurrencyConverter';


export default function App() {

  return (
    <View>
      <CurrencyConverter/>
      <StatusBar style="auto" />
    </View>
  );
}




