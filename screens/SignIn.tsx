import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AuthContext, { AuthContextInterface } from "../features/auth/authContext";
import { RootTabParamList } from "./RootTabParams";

type SignInProps = BottomTabScreenProps<RootTabParamList, 'SignIn'>

function SignIn ({navigation}: SignInProps) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const authContext = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Signup Screen</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={() => authContext?.signIn({username, password})} />
    </View>
  )
}

export default SignIn;