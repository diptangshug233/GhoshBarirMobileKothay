import React from "react";
import { registerRootComponent } from "expo";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/store/store";

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(ReduxApp);
