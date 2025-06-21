// src/screens/WebAppScreen.tsx
import React, { Dispatch, SetStateAction, useRef } from "react";
import { WebView } from "react-native-webview";
import { Linking, Platform } from "react-native";
import { View, ActivityIndicator } from "react-native";

type Props = {
  routePath: string;
  onLogout?: Dispatch<SetStateAction<boolean>>;
};

const allowedPaths = [
  "/rent",
  "/account",
  "/matches-for-you",
  "/favorites",
  "/unsubscribe",
];

const allowed = (url: string) => {
  const urlObj = new URL(url);
  return allowedPaths.some((path) => urlObj.pathname.startsWith(path));
};

const injectedJS = `
  document.querySelector('header')?.remove();
  document.querySelector('footer')?.remove();
  true;
`;

export default function WebAppScreen({ routePath }: Props) {
  const webviewRef = useRef(null);
  const fullUrl = `https://renthunter.nl${routePath}`;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        source={{ uri: fullUrl }}
        sharedCookiesEnabled={true}
        cacheEnabled={true}
        javaScriptEnabled={true}
        injectedJavaScript={injectedJS}
        startInLoadingState
        originWhitelist={["*"]}
        onShouldStartLoadWithRequest={(event) => {
          if (allowed(event.url)) return true;
          Linking.openURL(event.url);
          return false;
        }}
        userAgent={
          Platform.OS === "ios"
            ? "RentHunter-Mobile-App"
            : "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) RentHunter-Mobile-App"
        }
        renderLoading={() => (
          <ActivityIndicator style={{ flex: 1 }} size="large" />
        )}
      />
    </View>
  );
}
