import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem("token")
    }
  },
  applyMiddleware(reduxThunk)
);

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
