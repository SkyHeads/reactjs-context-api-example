import React from "react";
import { AppContextProvider } from "./context/main";
import AppComponent from "./component/main";
function App() {
  return (
    <AppContextProvider>
      <AppComponent />
    </AppContextProvider>
  );
}

export default App;