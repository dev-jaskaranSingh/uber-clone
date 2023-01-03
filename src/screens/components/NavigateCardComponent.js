import Ionicons from '@expo/vector-icons/Ionicons';
import * as PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

NavigateCardComponent.propTypes = { item: PropTypes.any };
export function NavigateCardComponent({ item }) {
    return (
        <TouchableOpacity className="m-1 py-2 flex-1 flex-row">
            <View className="bg-gray-500 rounded-full p-2 w-12 h-12 items-center justify-center shadow-sm border-gray-400 mr-3">
                <Ionicons
                    name={item.icon}
                    size={20}
                    color="white"
                    className={'mt-2'}
                />
            </View>
            <View>
                <Text className="text-lg text-gray-800 font-semibold">
                    {item.title}
                </Text>
                <Text className="text-gray-500">{item.description}</Text>
            </View>
        </TouchableOpacity>
    );
}
