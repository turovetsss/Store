import React from "react";
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App"
import { Provider } from "react-redux";
import { store } from "./feautures/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
        <App>

        </App>
  </BrowserRouter>
  </Provider>
)