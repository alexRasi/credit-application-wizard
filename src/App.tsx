import "./App.css";
import "@fontsource-variable/inter";

import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <>
      <Input
        label="Label"
        onChange={(value) => {
          console.log("Input changed:", value);
        }}
      />
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
