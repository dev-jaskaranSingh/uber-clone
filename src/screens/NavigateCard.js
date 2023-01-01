import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination, setOrigin } from '../../redux/slices/navSlice';
import { useDispatch } from 'react-redux';
import { GOOGLE_MAP_API_KEY } from 'env';
import { useNavigation } from '@react-navigation/native';
import Favorites from './Favorites';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View className={'flex-1 bg-white px-4'}>
            <Text className={'text-gray-700 bold text-center text-2xl my-3.5'}>
                👋 Hi, Good Morning Jass{' '}
            </Text>
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
                    language: 'en'
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                fetchDetails={true}
                onPress={(data, detail) => {
                    dispatch(
                        setDestination({
                            location: detail.geometry.location,
                            description: data.description
                        })
                    );
                    navigation.navigate('RideOptionsCard');
                }}
                returnKeyType={'search'}
            />
            <View className="mt-2">
                <Favorites />
            </View>
        </View>
    );
};
export default NavigateCard;
