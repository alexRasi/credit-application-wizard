import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/Input/TextInput/TextInput";
import { WizardLayout } from "./WizardLayout/WizardLayout";
import { useForm, FormProvider } from "react-hook-form";
import { useApplicationStore } from "../stores/application";
import { useEffect } from "react";

export const PersonalInfoPage = () => {
  const navigate = useNavigate();
  const { personalForm, setPersonalForm } = useApplicationStore();

  const methods = useForm({
    mode: "all",
    defaultValues: personalForm,
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields },
    trigger,
  } = methods;

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
            setPersonalForm(data);
            navigate("/finances");
          })}
          onCtaDisabledClick={async () => {
            await trigger();
          }}
        >
          {/* Assumption: Based on requirements, a name can include characters.
            Since numbers are considered characters in this context, they are allowed. */}
          <TextInput
            id="fullName"
            label="Full Name"
            placeholder="Jane Smith"
            type="text"
            {...register("fullName", {
              required: "Full name is required",
              maxLength: {
                value: 50,
                message: "Full name cannot exceed 50 characters",
              },
            })}
            error={errors.fullName?.message}
            data-testid="fullName-input"
          />
          <TextInput
            id="email"
            label="Email"
            placeholder="jane.smith@mail.com"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Invalid email format",
              },
            })}
            error={errors.email?.message}
            data-testid="email-input"
          />
          <TextInput
            id="date"
            label="Date of Birth"
            placeholder="30-10-2000"
            type="text"
            {...register("date", {
              required: "Date of birth is required",
              pattern: {
                value: /^\d{2}-\d{2}-\d{4}$/,
                message: "Must be in DD-MM-YYYY format",
              },
            })}
            /* Tradeoff: Show error only if field is touched and unblurred */
            error={
              touchedFields.date || errors.date?.message?.includes("required") // TODO fix includes
                ? errors.date?.message
                : undefined
            }
            data-testid="date-input"
          />
        </WizardLayout>
      </FormProvider>
    </>
  );
};
