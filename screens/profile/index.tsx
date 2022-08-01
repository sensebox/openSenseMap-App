import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../features/auth/authContext";
import { ProfileStackProps } from "../../features/profile/types";

type ProfileProps = NativeStackScreenProps<ProfileStackProps, 'Index'>

function ProfileIndex ({navigation}: ProfileProps) {

  const authContext = useContext(AuthContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Sign out" onPress={() => authContext?.signOut()}/>
      <Button
        title="Settings"
        onPress={() => navigation.push("Settings")}
      />
    </View>
  )
}

export default ProfileIndex;