import React from "react";
import {
  TabNavigator,
  StackNavigator,
  TabView,
  TabBarBottom
} from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/DeckScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingScreen from "../screens/SettingScreen";

const MainNavigator = TabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator(
        {
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingScreen }
            })
          }
        },
        {
          swipeEnabled: false,
          tabBarPosition: "bottom",
          tabBarOptions: {
            labelStyle: { fontSize: 12, margin: 0 },
            showIcon: true
          }
        }
      )
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    lazyLoad: true
  }
);

export default MainNavigator;
