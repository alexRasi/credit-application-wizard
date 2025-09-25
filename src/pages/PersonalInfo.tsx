import { Input } from "../components/Input/Input";
import { WizardLayout } from "../components/WizardLayout/WizardLayout";

export const PersonalInfo = () => {
  return (
    <>
      <WizardLayout title="Personal Info">
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
      </WizardLayout>
    </>
  );
};
