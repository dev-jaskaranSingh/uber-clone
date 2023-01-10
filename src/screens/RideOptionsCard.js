import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTravelTime } from '../../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    }
];

const RideOptionsCard = () => {

    const [activeItem, setActiveItem] = useState(null);
    const travelData = useSelector(selectTravelTime);
    const navigation = useNavigation();

    const SURGE_CHARGE_RATE = 1.2;
    return (
        <View className="h-full flex-1 bg-white">
            <View className="h-14 flex flex-row items-center">
                <TouchableOpacity
                    className="w-1/3 mt-2"
                    onPress={() => navigation.navigate('NavigateCards')}
                >
                    <Ionicons
                        name="chevron-back"
                        size={30}
                        color="gray"
                        className={'mt-2'}
                    />
                </TouchableOpacity>
                <Text className="text-center my-2 -ml-3 text-2xl font-semibold flex-2">
                    Select Ride{' '}
                    {travelData && `- ${travelData?.distance?.text}`}
                </Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    const classNames = [
                        'px-3',
                        'flex-row',
                        'justify-between',
                        'items-center',
                        'h-18'
                    ];

                    if (item.id === activeItem?.id)
                        classNames.push('bg-slate-200');

                    return (
                        <TouchableOpacity
                            className={classNames.join(' ')}
                            onPress={() => setActiveItem(item)}
                        >
                            <Image
                                source={{
                                    uri: item.image,
                                    width: 100,
                                    height: 100,
                                    resizeMode: 'contain'
                                }}
                                resizeMode="contain"
                            />
                            <View className="-ml-6 w-48">
                                <Text className="text-slate-800 font-bold text-2xl">
                                    {item.title}
                                </Text>
                                <Text className="text-slate-800 font-normal">
                                    {travelData?.duration?.text} Travel Time
                                </Text>
                            </View>
                            <Text className="text-slate-800 font-bold text-lg">
                                {new Intl.NumberFormat('en-gb', {
                                    style: 'currency',
                                    currency: 'INR'
                                }).format(
                                    (travelData.duration.value *
                                        SURGE_CHARGE_RATE *
                                        item.multiplier) /
                                        100
                                )}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => `${item.id}`}
            />
            <View className="px-8 py-2 pb-6 shadow-md backdrop-blur-md">
                <TouchableOpacity
                    disabled={!activeItem}
                    className={`${
                        !activeItem ? 'bg-slate-300' : 'bg-slate-900'
                    } p-2 fixed rounded flex-row justify-center`}
                >
                    <Text className="text-slate-100 text-xl">
                        {activeItem ? ` Select ${activeItem?.title}` : 'Chose '}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default RideOptionsCard;
