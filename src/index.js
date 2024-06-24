import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme/default";

import App from "./components/app/app"

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />    
      </ThemeProvider>      
    </HashRouter>
  </StrictMode>
);