import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootTabParamList } from "./screens/RootTabParams";
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const RootBottomTab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootBottomTab.Navigator initialRouteName="Home">
        <RootBottomTab.Screen name="Home" component={HomeScreen} />
        <RootBottomTab.Screen name="Details" component={DetailsScreen} />
      </RootBottomTab.Navigator>
    </NavigationContainer>
  );
}
