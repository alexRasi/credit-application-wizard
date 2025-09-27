import type { InputHTMLAttributes } from "react";
import {
  CheckboxLabel,
  CheckboxWrapper,
  StyledCheckbox,
} from "./Checkbox.styles";

type CheckboxProps = {
  label?: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox id={id} {...props} />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};
// TODO FIX align Styled naming
