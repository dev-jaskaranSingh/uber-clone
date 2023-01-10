import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RootNavigator } from './src/navigators/RootNavigator';

export default function App() {
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
                    <RootNavigator />
                </KeyboardAvoidingView>
            </NavigationContainer>
        </Provider>
    );
}
