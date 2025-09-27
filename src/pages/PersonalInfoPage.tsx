import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { WizardLayout } from "./WizardLayout/WizardLayout";
import { useForm, FormProvider } from "react-hook-form";
import { useApplicationStore } from "../stores/application";
import { useEffect } from "react";

export const PersonalInfoPage = () => {
  const navigate = useNavigate();
  const { personalForm, setPersonalForm } = useApplicationStore();

  const methods = useForm({
    mode: "onChange",
    defaultValues: personalForm,
  });
  const { register, handleSubmit, getValues } = methods;

  useEffect(() => {
    return () => {
      setPersonalForm(getValues());
    };
  }, [setPersonalForm, getValues]);

  return (
    <>
      <FormProvider {...methods}>
        <WizardLayout
          title="Personal Info"
          ctaLabel="Continue"
          ctaType="submit"
          onCtaSubmit={handleSubmit((data) => {
            console.log("Form Data:", data);
            setPersonalForm(data);
            navigate("/finances");
          })}
        >
          <Input
            label="Full Name"
            placeholder="Jane Smith"
            type="text"
            {...register("fullName", { required: true, maxLength: 50 })}
          />
          <Input
            label="Email"
            placeholder="jane.smith@mail.com"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          <Input
            label="Date of Birth"
            placeholder="30-10-2000"
            type="text"
            {...register("dob", {
              required: true,
              pattern: /^\d{2}-\d{2}-\d{4}$/,
            })}
          />
        </WizardLayout>
      </FormProvider>
    </>
  );
};
