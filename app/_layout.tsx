import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack, useNavigation } from "expo-router";
import CustomHeader from "../components/CustomHeader";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            headerTitle: "Filter",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close-outline" size={28} color={Colors.primary}/>
            </TouchableOpacity>,
          }}
        />
        <Stack.Screen
          name="(modal)/location-search"
          options={{
            presentation: "fullScreenModal",
            headerTitle: "Search location",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close-outline" size={28} color={Colors.primary}/>
            </TouchableOpacity>,
          }}
        />
        <Stack.Screen
          name="details"
          options={{
            presentation: "fullScreenModal",
            headerTitle: "Details",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close-outline" size={28} color={Colors.primary}/>
            </TouchableOpacity>,
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
