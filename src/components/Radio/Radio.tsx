import { RadioWrapper, StyledRadio, RadioLabel } from "./Radio.styles";

type RadioProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const Radio = ({ label, checked, onChange }: RadioProps) => {
  return (
    <RadioWrapper>
      <StyledRadio checked={checked} onChange={onChange} />
      <RadioLabel>{label}</RadioLabel>
    </RadioWrapper>
  );
};
