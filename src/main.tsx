import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import OnchainProvider from "./OnchainProvider.tsx";
import "@coinbase/onchainkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OnchainProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </OnchainProvider>
  </StrictMode>
);
