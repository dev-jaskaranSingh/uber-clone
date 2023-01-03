import { View } from 'react-native';
import { MapScreenNavigators } from '../navigators/MapScreenNavigators';
import Map from './Map';

const MapScreen = () => {
    return (
        <>
            <View className={'h-1/2'}>
                <Map />
            </View>
            <MapScreenNavigators />
        </>
    );
};
export default MapScreen;
