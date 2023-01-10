import { View } from 'react-native';

import Map from './Map';
import { MapScreenNavigators } from './../navigators/MapScreenNavigators';

const MapScreen = () => {
    return (
        <>
            <View className={'h-1/2'}>
                <Map />
            </View>
            <MapScreenNavigators/>
        </>
    );
};
export default MapScreen;
