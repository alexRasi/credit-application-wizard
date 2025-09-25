import {
  CheckboxLabel,
  CheckboxWrapper,
  StyledCheckbox,
} from "./Checkbox.styles";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox checked={checked} onChange={onChange} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};
