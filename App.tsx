import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigationOptions, BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as SecureStore from 'expo-secure-store';

import FeatherIcons from "@expo/vector-icons/Feather";

import { RootTabParamList } from "./screens/RootTabParams";
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { useEffect, useMemo, useReducer, useState } from "react";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import AuthContext, { AuthContextInterface } from "./features/auth/authContext";
import authReducer from "./features/auth/reducer";
import { AuthActionKind } from "./features/auth/actions";

type FeatherIconName = React.ComponentProps<typeof FeatherIcons>['name'];

const RootBottomTab = createBottomTabNavigator<RootTabParamList>();

const NavigatorScreenOptions = ({route}: BottomTabScreenProps<RootTabParamList>): BottomTabNavigationOptions => ({
  tabBarIcon: ({color, size}) => {
    let iconName: FeatherIconName = 'home';
    if (route.name === 'Home') {
      iconName = 'home'
    } else if (route.name === 'Details') {
      iconName = 'shopping-bag'
    } else if (route.name === 'SignIn') {
      iconName = 'log-in'
    } else if (route.name === 'Profile') {
      iconName = 'user'
    }

    return <FeatherIcons name={iconName} size={size} color={color}/>
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray'
});

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export default function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string | null = '';

      try {
        userToken = await SecureStore.getItemAsync('userToken')
      } catch (error) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: AuthActionKind.RESTORE_TOKEN, token: userToken });
    }

    bootstrapAsync();
  }, [])

  const authContext: AuthContextInterface = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: AuthActionKind.SIGN_IN, token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: AuthActionKind.SIGN_OUT, token: '' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: AuthActionKind.SIGN_IN, token: 'dummy-auth-token' });
      },
    }),
    []
  );


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootBottomTab.Navigator initialRouteName="Home" screenOptions={NavigatorScreenOptions}>
          {/* CommonScreen */}
          <RootBottomTab.Screen name="Home" component={HomeScreen} />
          <RootBottomTab.Screen name="Details" component={DetailsScreen} />
          {state.userToken ? (
            <RootBottomTab.Group>
              <RootBottomTab.Screen name="Profile" component={Profile} />
            </RootBottomTab.Group>
          ) : (
            <RootBottomTab.Group screenOptions={{ headerShown: false}}>
              <RootBottomTab.Screen name="SignIn" component={SignIn} />
            </RootBottomTab.Group>
          )}
        </RootBottomTab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
