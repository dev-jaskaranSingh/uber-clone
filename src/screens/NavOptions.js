import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
const data= [
    {
        "id": 1,
        "title": "Get a ride",
        "image": "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        "id": 2,
        "title": "Order food",
        "image": "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]
const NavOptions = () => {
    return(
        <FlatList
            className={"mt-6"}
            data={data}
            horizontal
            renderItem={ ({item, index}) => (
                <TouchableOpacity key={index} className={"bg-gray-200 flex-1 m-2 w-40 p-4 shadow rounded"} style={{
                    height: 220
                }}>
                    <View className={"justify-center items-center mb-2"}>
                        <Image source={{
                            uri: item.image
                        }}
                        style={{width:100,height:100, resizeMode: "contain"}}
                        />
                        <Text className={"text-lg mt-2 font-bold mt-2"}>{item?.title}</Text>
                    </View>
                    <Ionicons name="arrow-forward-circle" size={40} color="black"  className={"mt-2"}/>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => `${item.id}`}
        />
    );
}

export default NavOptions;
