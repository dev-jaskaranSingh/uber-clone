import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {setDestination, setOrigin} from "../../redux/slices/navSlice";
import {useDispatch} from "react-redux";
import {GOOGLE_MAP_API_KEY} from 'env'
const NavigateCard = () => {
    const dispatch = useDispatch()
    return (
        <View className={"flex-1 bg-white px-4"}>
            <Text className={"text-gray-700 bold text-center text-2xl my-3.5"}>👋 Hi, Good Morning Jass </Text>
            <GooglePlacesAutocomplete
                key={GOOGLE_MAP_API_KEY}
                placeholder="Where to ?"
                styles={{
                    container: {
                        flex: 0
                    },
                    textInput: {
                        fontSize: 18,
                        backgroundColor: 'lightgray'
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
                    dispatch(setDestination({
                        location: detail.geometry.location,
                        description: data.description
                    }));
                }}
                returnKeyType={"search"}
            />

        </View>
    );
}
export default NavigateCard;
