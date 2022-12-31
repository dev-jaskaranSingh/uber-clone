import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSelector} from "react-redux";
import {selectOrigin} from "../../redux/slices/navSlice";

const HomeScreen = () => {
    const origin = useSelector(selectOrigin);
    console.log(origin);
    return(
        <View style={styles.container}>
            <Text>This is really awesome Welcome on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
