import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCards from '../screens/NavigateCards';
import RideOptionsCard from '../screens/RideOptionsCard';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from './../../redux/slices/navSlice';


export function MapScreenNavigators() {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination); 
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ (destination && origin) ? 'RideOptionsCard' : 'NavigateCards'}
        >
            <Stack.Screen name={'NavigateCards'} component={NavigateCards} />
            <Stack.Screen
                name={'RideOptionsCard'}
                component={RideOptionsCard}
            />
        </Stack.Navigator>
    );
}
