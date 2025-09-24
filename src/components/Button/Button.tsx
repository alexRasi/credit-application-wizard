import { StyledButton } from "./Button.styles";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};
