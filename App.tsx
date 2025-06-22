import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./src/config/sentry";

import LoginScreen from "./src/screens/auth/LoginScreen";
import BottomTabs from "./src/components/BottomTabs";
import SignupScreen from "./src/screens/auth/SignupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
         initialRouteName={loggedIn ? 'Main' : 'Login'}
         screenOptions={{ headerShown: false }}>
          {!loggedIn ? (
           <>
             <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
           </>
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
