import { GOOGLE_MAP_API_KEY } from 'env';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../../redux/slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    console.log(destination);
    return (
        <MapView
            initialRegion={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            mapType={'mutedStandard'}
            className={'h-full'}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.destination}
                    apikey={GOOGLE_MAP_API_KEY}
                    strokeColor="dodgerblue"
                    strokeWidth={3}
                />
            )}

            <Marker
                key={231}
                coordinate={{
                    latitude: origin?.location?.lat,
                    longitude: origin?.location?.lng
                }}
                title={origin?.description}
                description={origin?.description}
                image={{
                    uri: 'https://img.icons8.com/color/96/null/marker--v1.png',
                    height: 30,
                    width: 30
                }}
            />
        </MapView>
    );
};
export default Map;
