import { WizardLayout } from "./WizardLayout/WizardLayout";
import { Radio } from "../components/Radio/Radio";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { TextInput } from "../components/Input/TextInput/TextInput";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useApplicationStore } from "../stores/application";
import { useEffect } from "react";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateApplication } from "../api/applications.queries";
import type { FinancesForm } from "../types/application";
import { Spinner } from "../components/Spinner/Spinner";

export const FinancesPage = () => {
  const navigate = useNavigate();
  const { personalForm } = useApplicationStore();
  const qc = useQueryClient();
  const createApplication = useCreateApplication();

  // Guard. Users can't navigate to finances directly
  useEffect(() => {
    if (!personalForm.fullName || !personalForm.dob || !personalForm.fullName) {
      navigate("/personal-info", { replace: true });
    }
  }, [personalForm, navigate]);

  const methods = useForm<FinancesForm>({
    mode: "all",
    defaultValues: {
      employmentType: "",
      income: "",
      termsAccepted: false,
    },
  });
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <WizardLayout
          title="Finances"
          ctaLabel="Submit"
          ctaType="submit"
          onCtaSubmit={handleSubmit(async (formData) => {
            try {
              await createApplication.mutateAsync({
                ...personalForm,
                ...formData,
              });
              await qc.invalidateQueries({ queryKey: ["applications"] });
              navigate("/success");
            } catch (error) {
              console.error(error);
            }
          })}
          onCtaDisabledClick={async () => {
            await trigger();
          }}
          footerAddon={
            <Checkbox
              label="I accept the terms and conditions"
              {...register("termsAccepted", { required: true })}
            />
          }
          back={<LeftArrowIcon width={32} height={32} />}
        >
          <TextInput
            label="Income"
            placeholder="Your monthly net income"
            type="number"
            {...register("income", {
              required: "Income is required",
              min: {
                value: 0,
                message: "income must not be negative",
              },
            })}
            error={errors.income?.message}
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
          {createApplication.isPending && <Spinner />}
        </WizardLayout>
      </FormProvider>
    </>
  );
};
