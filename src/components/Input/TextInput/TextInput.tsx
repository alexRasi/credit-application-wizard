import {
  FieldWrapper,
  Label,
  StyledInput,
  ErrorText,
} from "./TextInput.styles";

type TextInputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, error, id, ...props }: TextInputProps) => {
  return (
    <FieldWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        $invalid={!!error}
        aria-invalid={!!error}
        {...props}
      />
      {error && <ErrorText role="alert">{error}</ErrorText>}
    </FieldWrapper>
  );
};
