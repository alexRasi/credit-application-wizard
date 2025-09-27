import { WizardLayout } from "./WizardLayout/WizardLayout";
import { Radio } from "../components/Radio/Radio";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Input } from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

export const FinancesPage = () => {
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      income: "",
      employmentType: "",
      termsAccepted: false,
    },
  });
  const { register, handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <WizardLayout
          title="Finances"
          ctaLabel="Submit"
          onCtaClick={handleSubmit((data) => {
            console.log("Form Data:", data);
            navigate("/success");
          })}
          footerAddon={
            <Checkbox
              label="I accept the terms and conditions"
              {...register("termsAccepted", { required: true })}
            />
          }
        >
          <Input
            label="Income"
            placeholder="Your monthly net income"
            type="text"
            {...register("income", { required: true, pattern: /^\d+$/ })}
          />
          <Radio
            value="full"
            label="Full time"
            {...register("employmentType", { required: true })}
          />
          <Radio
            value="part"
            label="Part time"
            {...register("employmentType", { required: true })}
          />
          <Radio
            value="unemployed"
            label="Unemployed"
            {...register("employmentType", { required: true })}
          />
        </WizardLayout>
      </FormProvider>
    </>
  );
};
