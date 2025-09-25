import type { InputHTMLAttributes } from "react";
import {
  CheckboxLabel,
  CheckboxWrapper,
  StyledCheckbox,
} from "./Checkbox.styles";

type CheckboxProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox checked={checked} onChange={onChange} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};
