import { Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSelector} from "react-redux";
import {selectOrigin} from "../../redux/slices/navSlice";
import NavOptions from "./NavOptions";

const HomeScreen = () => {
    const origin = useSelector(selectOrigin);
    console.log(origin);
    return(
        <View className="flex-1 bg-white px-4 pt-6">
            <Text className="color-black-300 font-semibold text-5xl antialiased">Uber</Text>
            <NavOptions/>
        </View>
    );
}

export default HomeScreen;
