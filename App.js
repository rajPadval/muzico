import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LibraryScreen from "./screens/LibraryScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import PlayerScreen from "./screens/PlayerScreen";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#e91e63",
          tabBarStyle: {
            backgroundColor: "black",
            borderBlockColor: "black",
          },
        }}
      >
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="library-shelves" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Player"
          component={PlayerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="music-circle" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Playlist"
          component={PlaylistScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="playlist-music" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
