import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebAppScreen from "../screens/WebAppScreen";
import { IconWithBadge } from "./reuseables/IconWithBadge";

const Tab = createBottomTabNavigator();

export default function BottomTabs({
  onLogout,
}: {
  onLogout: (value: boolean) => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          {
            paddingBottom: insets.bottom,
            height: 50 + insets.bottom,
          },
        ],
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === "android" ? 5 + insets.bottom / 2 : 5,
        },
        tabBarActiveTintColor: "#F26522",
        tabBarInactiveTintColor: "#888",
        tabBarButton: (props) => {
          const { children, onPress, testID, accessibilityLabel, style } =
            props;
          return (
            <TouchableOpacity
              onPress={onPress}
              testID={testID}
              accessibilityLabel={accessibilityLabel}
              activeOpacity={0.7}
              style={[style, { borderRadius: 0 }]}
            >
              {children}
            </TouchableOpacity>
          );
        },
      }}
    >
      <Tab.Screen
        name="ForYou"
        children={() => <WebAppScreen routePath="/matches-for-you" />}
        options={{
          title: "For You",
          tabBarIcon: ({ color, size }) => (
            <IconWithBadge
              name="download-outline"
              color={color}
              size={size}
              badgeCount={99}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        children={() => <WebAppScreen routePath="/rent" />}
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        children={() => <WebAppScreen routePath="/favorites" />}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <IconWithBadge
              name="heart-outline"
              color={color}
              size={size}
              badgeCount={1}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        children={() => (
          <WebAppScreen routePath="/account" onLogout={onLogout} />
        )}
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    overflow: "hidden",
    borderTopWidth: 0.2,
    elevation: 10,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});
