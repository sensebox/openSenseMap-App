import { Button, Text, View } from "react-native";
import { RootTabParamList } from "./RootTabParams";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type DetailsScreenProps = BottomTabScreenProps<RootTabParamList, 'Favorites'>

function Favorites({route, navigation}: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Favorites;