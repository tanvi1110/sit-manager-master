import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { THEME_CONFIG } from "./configs/AppConfig";
import history from "./history";
import "./lang";
import Layouts from "./layouts";
import mockServer from "./mock";
import store from "./store";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  mockServer({ environment });
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={THEME_CONFIG.currentTheme}
            insertionPoint="styles-insertion-point"
          >
            <Layouts />
          </ThemeSwitcherProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
