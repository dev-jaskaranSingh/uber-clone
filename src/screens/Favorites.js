import React from 'react';
import {FlatList, View} from 'react-native';
import {NavigateCardComponent} from "./components/NavigateCardComponent";

const locations = [
    {
        id: 21,
        title: 'HOME',
        description: 'Chetanpura, Amritsar, Punjab.',
        icon: 'home'
    },
    {
        id: 23,
        title: 'WORK',
        description: 'BMNInfoTech, Amritsar, Punjab.',
        icon: 'location'
    }
];
let renderItem = ({ item, index }) => {
        return (
            <NavigateCardComponent item={item}/>
        );
    };
const Favorites = () => {
    return (
        <FlatList
            data={locations}
            keyExtractor={(_item, index) => `${index}`}
            ItemSeparatorComponent={() => (
                <View className="bg-gray-200 h-0.5 rounded-full" />
            )}
            renderItem={renderItem}
        />
    );
};

export default Favorites;
