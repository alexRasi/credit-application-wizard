import { ErrorText, FieldWrapper, Label } from "../InputStyles";
import { StyledTextInput } from "./TextInput.styles";

type TextInputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, error, id, ...props }: TextInputProps) => {
  return (
    <FieldWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextInput
        id={id}
        $invalid={!!error}
        aria-invalid={!!error}
        {...props}
      />
      {error && <ErrorText role="alert">{error}</ErrorText>}
    </FieldWrapper>
  );
};
