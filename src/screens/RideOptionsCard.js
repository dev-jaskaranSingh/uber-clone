import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

const RideOptionsCard = () => {
    return (
        <View className="h-full flex-1 bg-white">
            <View className="flex flex-row items-align-center">
                <TouchableOpacity className="w-1/3 mt-2">
                    <Ionicons
                        name="chevron-back"
                        size={30}
                        color="gray"
                        className={'mt-2'}
                    />
                </TouchableOpacity>
                <Text className="text-center my-2 text-2xl font-semibold flex-2">
                    Select Ride
                </Text>
            </View>
        </View>
    );
};
export default RideOptionsCard;
