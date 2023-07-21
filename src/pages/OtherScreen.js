import { Button } from "react-native";

export default function OtherScreen({navigation}) {
    return (
        <>
            <Button title="back" onPress={()=>navigation.navigate("Profile")}/>
        </>
    );
};