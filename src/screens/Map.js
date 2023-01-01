import { GOOGLE_MAP_API_KEY } from 'env';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../../redux/slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { useRef, useEffect } from 'react';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);


    useEffect(() => {
        if(!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
            edgePadding : {top: 50, left: 50, right: 50, bottom: 50}
        });

    }, [origin, destination]);
    return (
        <MapView
            ref={mapRef}
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
                    destination={destination.description}
                    apikey={GOOGLE_MAP_API_KEY}
                    strokeColor="black"
                    strokeWidth={3}
                />
            )}

            {origin && (
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
                    identifier="origin"
                />
            )}

            {destination && (
                <Marker
                    key={2341}
                    coordinate={{
                        latitude: destination?.location?.lat,
                        longitude: destination?.location?.lng
                    }}
                    title={destination?.description}
                    description={destination?.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
};
export default Map;
