import type { ReactNode } from "react";
import {
  WizardContent,
  Header,
  Heading1,
  Content,
  Footer,
} from "./WizardLayout.styles";
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
    <WizardContent>
      <Header>
        {back ?? <span />}
        {title && <Heading1>{title}</Heading1>}
        <span />
      </Header>
      <Content>{children}</Content>
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
    </WizardContent>
  );
};
