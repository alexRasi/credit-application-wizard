import { WizardLayout } from "./WizardLayout/WizardLayout";
import { Radio } from "../components/Radio/Radio";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Input } from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useApplicationStore } from "../stores/application";
import { useEffect } from "react";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";

export const FinancesPage = () => {
  const navigate = useNavigate();
  const { personalForm } = useApplicationStore();

  // Guard. Users can't navigate to finances directly
  useEffect(() => {
    if (!personalForm.fullName || !personalForm.dob || !personalForm.fullName) {
      navigate("/personal-info", { replace: true });
    }
  }, [personalForm, navigate]);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      employmentType: "",
      income: "",
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
          ctaType="submit"
          onCtaSubmit={handleSubmit(async (data) => {
            console.log("Form Data:", data);
            const payload = { ...personalForm, ...data };

            await fetch(
              "https://682de3f5746f8ca4a47b0980.mockapi.io/applications",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              },
            ).then((res) => {
              if (res.ok) {
                navigate("/success");
              } else {
                console.error("Failed to submit application:", res.statusText);
              }
            });
          })}
          footerAddon={
            <Checkbox
              label="I accept the terms and conditions"
              {...register("termsAccepted", { required: true })}
            />
          }
          back={<LeftArrowIcon width={32} height={32} />}
        >
          <Input
            label="Income"
            placeholder="Your monthly net income"
            type="text"
            {...register("income", {
              required: true,
              min: 0,
              valueAsNumber: true,
            })}
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
