import React from "react";

import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

import MapView from "./components/mapView";
YellowBox.ignoreWarnings(["Warning: Async"]);
const App = () => (
  <Provider store={store}>
    <MapView />
  </Provider>
);

export default App;
