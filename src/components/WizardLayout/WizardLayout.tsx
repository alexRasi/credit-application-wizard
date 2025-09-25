import type { ReactNode } from "react";
import { Footer, Header, Heading1 } from "./WizardLayout.styles";
import { Button } from "../Button/Button";

type WizardLayoutProps = {
  title?: string;
  back?: ReactNode;
  footerAddon?: React.ReactNode;
  children: ReactNode;
  onSubmit?: () => void;
};

export const WizardLayout = ({
  title,
  back,
  onSubmit,
  footerAddon,
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
      <Footer>
        {footerAddon}
        <Button
          label="Continue"
          onClick={() => {
            console.log("Continue clicked");
            onSubmit?.();
          }}
        />
      </Footer>
    </>
  );
};
