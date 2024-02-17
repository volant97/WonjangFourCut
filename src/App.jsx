import { NextUIProvider } from "@nextui-org/react";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <NextUIProvider>
      <GlobalStyles />
      <Router />
    </NextUIProvider>
  );
}

export default App;
