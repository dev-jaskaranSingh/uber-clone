import Ionicons from '@expo/vector-icons/Ionicons';
import * as PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

NavOptionItem.propTypes = {
    origin: PropTypes.object || null,
    onPress: PropTypes.func,
    item: PropTypes.any
};
export function NavOptionItem({ origin, onPress, item }) {
    return (
        <TouchableOpacity
            className={
                'bg-gray-200 flex-1 m-2 w-40 p-4 border-l-gray-400 shadow rounded'
            }
            style={{
                height: 220,
                opacity: !origin ? 0.4 : 1
            }}
            onPress={onPress}
            disabled={!origin}
        >
            <Component item={item}/>
            <Ionicons
                name="arrow-forward-circle"
                size={40}
                color="black"
                className={'mt-2'}
            />
        </TouchableOpacity>
    );
}

function Component({ item }) {
    return (
        <View className={'justify-center items-center mb-2'}>
            <Image
                source={{
                    uri: item.image
                }}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }}
            />
            <Text className={'text-lg mt-2 font-bold mt-2'}>{item?.title}</Text>
        </View>
    );
}
