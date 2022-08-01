import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { ProfileStackProps } from "../features/profile/types";

type SettingsScreenProps = NativeStackScreenProps<ProfileStackProps, 'Settings'>

function Settings ({navigation}: SettingsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push('Index')}
      />
    </View>
  )
}

export default Settings;