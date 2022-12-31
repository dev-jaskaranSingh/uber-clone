import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from "react-redux";
import {selectOrigin} from "../../redux/slices/navSlice";
const Map = () => {
    const origin = useSelector(selectOrigin)
    return (
            <MapView
                initialRegion={{
                    latitude: origin?.location?.lat,
                    longitude: origin?.location?.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                mapType={"mutedStandard"}
                className={"h-full"}
            >
                <Marker
                    key={231}
                    coordinate={{
                        latitude: origin?.location?.lat,
                        longitude: origin?.location?.lng
                    }}
                    title={origin?.description}
                    description={origin?.description}
                    image={{uri: 'https://img.icons8.com/color/96/null/marker--v1.png', height: 30, width: 30}}
                />
            </MapView>
    );
}
export default Map;
