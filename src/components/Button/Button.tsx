import { StyledButton } from "./Button.styles";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ label, onClick, disabled, ...props }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...props}>
      {label}
    </StyledButton>
  );
};
