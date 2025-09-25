import type { ReactNode } from "react";
import { Header, Heading1, ButtonWrapper } from "./WizardLayout.styles";
import { Button } from "../Button/Button";

type WizardLayoutProps = {
  title?: string;
  back?: ReactNode;
  //   footer?: ReactNode;
  children: ReactNode;
  onSubmit?: () => void;
};

export const WizardLayout = ({
  title,
  back,
  onSubmit,
  //   footer,
  children,
}: WizardLayoutProps) => {
  return (
    <>
      <Header>
        {back ?? <span />}
        {title && <Heading1>{title}</Heading1>}
      </Header>
      {children}
      {/* {footer && <ButtonWrapper>{footer}</ButtonWrapper>} */}
      <ButtonWrapper>
        <Button
          label="Continue"
          onClick={() => {
            console.log("Continue clicked");
            onSubmit?.();
          }}
        />
      </ButtonWrapper>
    </>
  );
};
