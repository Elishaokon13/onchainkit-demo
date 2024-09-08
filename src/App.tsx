import { VStack } from "@chakra-ui/react";
import "./App.css";
import SwapComponents from "./components/features/Swap";

function App() {
  return (
    <VStack w="full" align="center" justify="center" h="90vh">
      <SwapComponents />
    </VStack>
  );
}

export default App;
