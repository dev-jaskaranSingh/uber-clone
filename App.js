import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/screens/MapScreen';
import FoodScreen from './src/screens/FoodScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                    style={{
                        flex: 1
                    }}
                >
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                        />
                        <Stack.Screen name="MapScreen" component={MapScreen} />
                        <Stack.Screen
                            name="FoodScreen"
                            component={FoodScreen}
                        />
                    </Stack.Navigator>
                </KeyboardAvoidingView>
            </NavigationContainer>
        </Provider>
    );
}
