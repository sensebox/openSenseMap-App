import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigationOptions, BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeatherIcons from "@expo/vector-icons/Feather";

import { RootTabParamList } from "./screens/RootTabParams";
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

type FeatherIconName = React.ComponentProps<typeof FeatherIcons>['name'];

const RootBottomTab = createBottomTabNavigator<RootTabParamList>();

const NavigatorScreenOptions = ({route}: BottomTabScreenProps<RootTabParamList>): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName: FeatherIconName = 'home';
    if (route.name === 'Home') {
      iconName = 'home'
    } else if (route.name === 'Details') {
      iconName = 'shopping-bag'
    }

    return <FeatherIcons name={iconName} size={size} color={color}/>
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray'
});

export default function App() {
  return (
    <NavigationContainer>
      <RootBottomTab.Navigator initialRouteName="Home" screenOptions={NavigatorScreenOptions}>
        <RootBottomTab.Screen name="Home" component={HomeScreen} />
        <RootBottomTab.Screen name="Details" component={DetailsScreen} />
      </RootBottomTab.Navigator>
    </NavigationContainer>
  );
}
