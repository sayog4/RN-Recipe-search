import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import { RootNavigator } from "./Navigation/Navigation";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const fetchFonts = () => {
  return Font.loadAsync({
    "lato": require("./assets/fonts/Lato-Regular.ttf"),
    "latoBold": require("./assets/fonts/Lato-Bold.ttf")
  });
};
const App = () => {
  const[ fontLoaded, setFontLoaded ] = useState(false);
  
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={ () => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
