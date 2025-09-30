import type { InputHTMLAttributes } from "react";
import { RadioText, RadioWrapper, StyledRadio } from "./Radio.styles";

type RadioProps = {
  label?: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({ label, id, ...props }: RadioProps) => {
  return (
    <RadioWrapper>
      <StyledRadio id={id} type="radio" {...props} />
      {label && <RadioText>{label}</RadioText>}
    </RadioWrapper>
  );
};
