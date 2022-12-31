import {Provider, useSelector} from 'react-redux';
import {store} from "./redux/store";
import HomeScreen from "./src/screens/HomeScreen";
import {SafeAreaView} from 'react-native'
import {StatusBar} from "expo-status-bar";

// 1) Setup redux toolkit

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaView className="h-full">
            <StatusBar style="auto" />
            <HomeScreen/>
          </SafeAreaView>
      </Provider>
  );
}
