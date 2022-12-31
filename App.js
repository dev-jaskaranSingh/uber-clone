import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// 1) Setup redux toolkit

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is really awesome Welcome on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
