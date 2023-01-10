import { TouchableOpacity, View, Text } from 'react-native';

import Map from './Map';
import { MapScreenNavigators } from './../navigators/MapScreenNavigators';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity
                className={`p-2 bg-white rounded-full shadow-lg absolute top-16 left-5 z-50`}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Ionicons
                    name="menu"
                    size={35}
                    color="gray"
                    className={'mt-2'}
                />
            </TouchableOpacity>
            <View className={'h-1/2'}>
                <Map />
            </View>
            <MapScreenNavigators />
        </>
    );
};
export default MapScreen;
