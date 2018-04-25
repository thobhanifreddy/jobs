import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import store from "./store";
import MainNavigator from "./config/navigation";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
