import type { InputHTMLAttributes } from "react";
import { RadioWrapper, StyledRadio, RadioLabel } from "./Radio.styles";

type RadioProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({ label, checked, onChange }: RadioProps) => {
  return (
    <RadioWrapper>
      <StyledRadio checked={checked} onChange={onChange} />
      <RadioLabel>{label}</RadioLabel>
    </RadioWrapper>
  );
};
