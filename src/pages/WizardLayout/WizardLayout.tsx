import type { FormEventHandler, ReactNode } from "react";
import {
  WizardContent,
  Header,
  Heading1,
  Content,
  Footer,
} from "./WizardLayout.styles";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";

type WizardLayoutProps = {
  title?: string;
  back?: ReactNode;
  footerAddon?: React.ReactNode;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

export const WizardLayout = ({
  title,
  back,
  onSubmit,
  footerAddon,
  children,
}: WizardLayoutProps) => {
  const formContext = useFormContext();
  const isValid = formContext?.formState?.isValid ?? false;
  const isSubmitting = formContext?.formState?.isSubmitting ?? false;

  return (
    <WizardContent>
      <Header>
        {back ?? <span />}
        {title && <Heading1>{title}</Heading1>}
        <span />
      </Header>
      <form onSubmit={onSubmit} noValidate>
        <Content>{children}</Content>
        <Footer>
          {footerAddon}
          <Button
            label="Continue"
            type="submit"
            disabled={formContext ? !isValid || isSubmitting : false}
          />
        </Footer>
      </form>
    </WizardContent>
  );
};
