import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootTabParamList } from "./RootTabParams";

import ProfileIndex from "./profile";
import Settings from "./Settings";

type ProfileProps = BottomTabScreenProps<RootTabParamList, 'Profile'>

const Stack = createNativeStackNavigator();

function Profile ({navigation}: ProfileProps) {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={ProfileIndex} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerTransparent: true, title: '', headerTitle: '', headerBackTitle: ''}} />
    </Stack.Navigator>
  )
}

export default Profile;