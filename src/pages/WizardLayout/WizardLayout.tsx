import type { FormEventHandler, ReactNode } from "react";
import {
  WizardContent,
  Header,
  Heading1,
  Content,
  Footer,
  Form,
  Back,
} from "./WizardLayout.styles";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type WizardLayoutProps = {
  title?: string;
  back?: ReactNode;
  footerAddon?: React.ReactNode;
  children: ReactNode;
  ctaLabel?: string;
  ctaType?: "button" | "submit";
  onCtaSubmit?: FormEventHandler<HTMLFormElement>;
  onCtaClick?: () => void;
  onCtaDisabledClick?: () => void;
};

export const WizardLayout = ({
  title,
  back,
  ctaLabel,
  ctaType,
  onCtaClick,
  onCtaSubmit,
  onCtaDisabledClick,
  footerAddon,
  children,
}: WizardLayoutProps) => {
  const formContext = useFormContext();
  const isValid = formContext?.formState?.isValid ?? false;
  const isSubmitting = formContext?.formState?.isSubmitting ?? false;
  const navigate = useNavigate();

  return (
    <WizardContent>
      <Header>
        {back && <Back onClick={() => navigate(-1)}>{back}</Back>}
        {title && <Heading1>{title}</Heading1>}
        <span />
      </Header>
      <Form onSubmit={onCtaSubmit} noValidate>
        <Content>{children}</Content>
        <Footer>
          {footerAddon}
          <Button
            onClick={onCtaClick}
            onDisabledClick={onCtaDisabledClick}
            label={ctaLabel ?? "Next"}
            type={ctaType ?? "submit"}
            disabled={formContext ? !isValid || isSubmitting : false}
          />
        </Footer>
      </Form>
    </WizardContent>
  );
};
