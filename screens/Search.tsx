import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RootTabParamList } from "./RootTabParams";

import * as Location from 'expo-location';
import { LocationObject } from "expo-location";

type ProfileProps = BottomTabScreenProps<RootTabParamList, 'Profile'>

function Search ({navigation}: ProfileProps) {

  const [location, setLocation] = useState<LocationObject>();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    }

    bootstrapAsync();
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search screen</Text>
      <Text>{JSON.stringify(location)}</Text>
    </View>
  )
}

export default Search;