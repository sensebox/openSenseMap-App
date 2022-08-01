import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../features/auth/authContext";
import { RootTabParamList } from "./RootTabParams";

type ProfileProps = BottomTabScreenProps<RootTabParamList, 'Profile'>

function Profile ({navigation}: ProfileProps) {

  const authContext = useContext(AuthContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Sign out" onPress={() => authContext?.signOut()}/>
    </View>
  )
}

export default Profile;