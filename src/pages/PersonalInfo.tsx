import { Input } from "../components/Input/Input";

export const PersonalInfo = () => {
  return (
    <>
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
    </>
  );
};
