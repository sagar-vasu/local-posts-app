import React from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { SplashScreen } from "./src/screens";

import AppNavigation from "./src/config/Navigation";
import { AppRegistry } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    setTimeout(() => {
      this.setState({ isReady: true });
    }, 2000);
  }

  render() {
    if (!this.state.isReady) {
      return <SplashScreen />;
    }

    return <AppNavigation />;
  }
}

AppRegistry.registerComponent("App", () => App);
