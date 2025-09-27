import type { InputHTMLAttributes } from "react";
import { RadioWrapper, StyledRadio, RadioLabel } from "./Radio.styles";

type RadioProps = {
  label?: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({ label, id, ...props }: RadioProps) => {
  return (
    <RadioWrapper>
      <StyledRadio id={id} type="radio" {...props} />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioWrapper>
  );
};
