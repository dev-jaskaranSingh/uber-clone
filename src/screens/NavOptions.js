import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../redux/slices/navSlice';
import { NavOptionItem } from './components/NavOptionItem';

const data = [
    {
        id: 1,
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: 2,
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'FoodScreen'
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    const renderItem = ({ item, index }) => (
        <NavOptionItem
            key={index}
            origin={origin}
            onPress={() => navigation.navigate(item.screen)}
            item={item}
        />
    );

    return (
        <FlatList
            className={'mt-6'}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
        />
    );
};

export default NavOptions;
