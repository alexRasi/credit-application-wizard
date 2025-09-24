import "./App.css";
import "@fontsource-variable/inter";

import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        label="Submit"
        onClick={() => {
          console.log("Submit clicked");
        }}
      />
    </>
  );
}

export default App;
