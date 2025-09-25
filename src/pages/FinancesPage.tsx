import { WizardLayout } from "../components/WizardLayout/WizardLayout";
import { Radio } from "../components/Radio/Radio";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Input } from "../components/Input/Input";

export const FinancesPage = () => {
  return (
    <>
      <WizardLayout
        title="Finances"
        onSubmit={() => {
          window.location.href = "/applications";
        }}
        footerAddon={
          <Checkbox
            label="I accept the terms and conditions"
            onChange={(checked) => console.log("termsAccepted:", checked)}
          />
        }
      >
        <Input
          label="Income"
          placeholder="Your monthly net income"
          type="text"
          onChange={(value) => {
            console.log("Input changed:", value);
          }}
        />
        <Radio
          name="employmentType"
          value="full"
          label="Full time"
          onChange={(value) => console.log("employmentType:", value)}
        />
        <Radio
          name="employmentType"
          value="part"
          label="Part time"
          onChange={(value) => console.log("employmentType:", value)}
        />
        <Radio
          name="employmentType"
          value="unemployed"
          label="Unemployed"
          onChange={(value) => console.log("employmentType:", value)}
        />
      </WizardLayout>
    </>
  );
};
