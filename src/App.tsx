import "@fontsource-variable/inter";

import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { AppContainer, ButtonWrapper, Heading1 } from "./App.styles";
import { AppRouter } from "./router";

function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );

  return (
    <AppContainer>
      <Heading1>Personal Info</Heading1>
      <Input
        label="Full Name"
        placeholder="Jane Smith"
        type="text"
        onChange={(value) => {
          console.log("Input changed:", value);
        }}
      />
      <Input
        label="Email"
        placeholder="jane.smith@mail.com"
        type="email"
        onChange={(value) => {
          console.log("Input changed:", value);
        }}
      />
      <Input
        label="Date of Birth"
        placeholder="30-10-2000"
        type="text"
        onChange={(value) => {
          console.log("Input changed:", value);
        }}
      />
      <ButtonWrapper>
        <Button
          label="Submit"
          onClick={() => {
            console.log("Submit clicked");
          }}
        />
      </ButtonWrapper>
    </AppContainer>
  );
}

export default App;
