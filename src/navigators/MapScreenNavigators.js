import { createNativeStackNavigator } from '@react-navigation/native-stack';


export function MapScreenNavigators() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={'NavigateCards'} component={NavigateCards} />
            <Stack.Screen
                name={'RideOptionsCard'}
                component={RideOptionsCard}
            />
        </Stack.Navigator>
    );
}
