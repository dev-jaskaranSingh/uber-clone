import { Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from "react-redux";
import {selectOrigin, setDestination, setOrigin} from "../../redux/slices/navSlice";
import NavOptions from "./NavOptions";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API_KEY} from 'env'
const HomeScreen = () => {
    const origin = useSelector(selectOrigin);
    const dispatch = useDispatch();
    return(
        <SafeAreaView className="flex-1 bg-white px-4 pt-6">
            <Text className="color-black-300 font-semibold text-5xl antialiased">Uber</Text>
            <View>

                <GooglePlacesAutocomplete
                    key={GOOGLE_MAP_API_KEY}
                    placeholder="Where from ?"
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18
                        }
                    }}
                    query={{
                        key: GOOGLE_MAP_API_KEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    minLength={2}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    onPress={(data, detail) => {
                        dispatch(setOrigin({
                            location: detail.geometry.location,
                            description: data.description
                        }));
                        dispatch(setDestination(null));
                    }}
                    returnKeyType={"search"}

                />
            </View>
            <View>
                <NavOptions/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
