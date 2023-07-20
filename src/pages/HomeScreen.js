import { Button, Text} from 'react-native';

export default function HomeScreen({navigation, route}) {
    const setHeader = route.params.setHeader;
    return (
        <>
            <Button title="Home" onPress={() => {
                navigation.navigate('Profile');
            }}/>
        </>
    );
};