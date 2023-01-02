import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Map from './Map';
import NavigateCard from './NavigateCard';
import RideOptionsCard from './RideOptionsCard';
const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <View className={'h-1/2'}>
                <Map />
            </View>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={'NavigateCard'} component={NavigateCard} />
                <Stack.Screen
                    name={'RideOptionsCard'}
                    component={RideOptionsCard}
                />
            </Stack.Navigator>
        </>
    );
};
export default MapScreen;
