import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import AppContext from "./AppContext";
import GlobalStyles from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";
import { antdThemeDark, antdThemeLight } from "./theme/antdTheme";
import MainApp from "./MainApp";
import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "antd";

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ConfigProvider theme={darkMode.value ? antdThemeDark : antdThemeLight}>
        <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
          <GlobalStyles />
          <div className="App">
            <BrowserRouter>
              <MainApp />
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </ConfigProvider>
    </AppContext.Provider>
  );
}

export default App;
