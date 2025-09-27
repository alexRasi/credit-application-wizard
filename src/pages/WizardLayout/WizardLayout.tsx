import type { FormEventHandler, ReactNode } from "react";
import {
  WizardContent,
  Header,
  Heading1,
  Content,
  Footer,
  Form,
} from "./WizardLayout.styles";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";

type WizardLayoutProps = {
  title?: string;
  back?: ReactNode;
  footerAddon?: React.ReactNode;
  children: ReactNode;
  ctaLabel?: string;
  ctaType?: "button" | "submit";
  onCtaSubmit?: FormEventHandler<HTMLFormElement>;
  onCtaClick?: () => void;
};

export const WizardLayout = ({
  title,
  back,
  ctaLabel,
  ctaType,
  onCtaClick,
  onCtaSubmit,
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
      <Form onSubmit={onCtaSubmit} noValidate>
        <Content>{children}</Content>
        <Footer>
          {footerAddon}
          <Button
            onClick={onCtaClick}
            label={ctaLabel ?? "Next"}
            type={ctaType ?? "submit"}
            disabled={formContext ? !isValid || isSubmitting : false}
          />
        </Footer>
      </Form>
    </WizardContent>
  );
};
