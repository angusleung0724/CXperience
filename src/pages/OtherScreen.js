import { Button, Image } from 'react-native';

export default function OtherScreen({navigation}) {
    return (
        <>
            <Button title="Other" onPress={() => navigation.navigate('Home')}/>
        </>
        

    );
};