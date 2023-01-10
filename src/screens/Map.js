import { GOOGLE_MAP_API_KEY } from 'env';
import { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector, useDispatch } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../../redux/slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination); 
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    /* A hook that is called when the component is mounted and when the origin or destination changes.
    It is used to fit the map to the origin and destination markers. */
    useEffect(() => {
        if (!origin || !destination) return;

        /* Fitting the map to the origin and destination markers. */
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, left: 50, right: 50, bottom: 50 }
        });

        const getTravelTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAP_API_KEY}`;
            fetch(URL)
                .then((data) => data.json())
                .then((data) => dispatch(setTravelTimeInformation(data.rows[0].elements[0])))
                .catch((err) => console.log(err));
        }

        getTravelTime();

        
    }, [origin, destination, GOOGLE_MAP_API_KEY]);

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
                        uri: 'https://img.icons8.com/stickers/100/null/map-pin.png',
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
                    image={{
                        uri: 'https://img.icons8.com/stickers/100/null/map-pin.png',
                        height: 30,
                        width: 30
                    }}
                />
            )}
        </MapView>
    );
};

export default Map;
