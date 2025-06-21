import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import LoginScreen from "./src/screens/LoginScreen";
import BottomTabs from "./src/components/BottomTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!loggedIn ? (
            // <Stack.Screen name="Login">
            //   {() => <LoginScreen onLogin={() => setLoggedIn(true)} />}
            // </Stack.Screen>
            <></>
          ) : (
            <Stack.Screen name="Main">
              {() => <BottomTabs onLogout={setLoggedIn} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
