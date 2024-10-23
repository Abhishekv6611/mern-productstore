import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {StrictMode} from 'react'
import  {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);