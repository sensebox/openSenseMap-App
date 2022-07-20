import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Button, Text, View } from "react-native";
import { RootTabParamList } from "./RootTabParams";

type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>

function HomeScreen ({navigation}: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
           userId: 'test1234'
        })}
      />
    </View>
  )
}

export default HomeScreen;