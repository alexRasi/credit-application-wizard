import { ButtonWrapper, StyledButton } from "./Button.styles";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  onDisabledClick?: () => void; // So we can show required error messages in forms
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  label,
  onClick,
  disabled,
  onDisabledClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          e.stopPropagation();
          onDisabledClick?.();
          return;
        }
        onClick?.();
      }}
    >
      <StyledButton disabled={disabled} {...props}>
        {label}
      </StyledButton>
    </ButtonWrapper>
  );
};
