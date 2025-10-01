import {
  useFormContext,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import styled from "styled-components";
import { ErrorText, FieldWrapper, Label } from "../InputStyles";
import { Radio } from "../Radio/Radio";

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`;

type Option = { label: string; value: string; id?: string; testId?: string };

type RadioGroupProps = {
  label?: string;
  name: string;
  options: Option[];
  rules?: RegisterOptions<FieldValues, string> | undefined;
  error?: string;
};

export const RadioGroup = ({
  label,
  name,
  options,
  rules,
  error,
  ...props
}: RadioGroupProps) => {
  const { register } = useFormContext();

  return (
    <FieldWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}

      <OptionsWrapper
        {...props}
        role="radiogroup"
        aria-invalid={!!error}
        aria-describedby={error ? error : undefined}
      >
        {/*todo aria described by */}
        {options.map((option) => (
          <Radio
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            {...register(name, rules)}
            data-testid={option.testId}
          />
        ))}
      </OptionsWrapper>

      {error && (
        <ErrorText id={`${name}-error`} role="alert">
          {error}
        </ErrorText>
      )}
    </FieldWrapper>
  );
};
