import { FieldWrapper, Label, StyledInput, ErrorText } from "./Input.styles";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

//TODO add placeholder and error styles

export const Input = ({ label, error, id, ...props }: InputProps) => {
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
