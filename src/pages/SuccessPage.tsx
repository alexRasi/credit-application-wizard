import { useNavigate } from "react-router-dom";
import { WizardLayout } from "./WizardLayout/WizardLayout";
import styled from "styled-components";
import { useApplicationStore } from "../stores/application";
import { useEffect } from "react";

export const Message = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: #171717;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #171717;
`;

export const SuccessPage = () => {
  const navigate = useNavigate();
  const { resetStore } = useApplicationStore();

  useEffect(() => {
    // Clear the store when the component mounts
    resetStore();
  }, [resetStore]);

  //TODO Guard. Users can't navigate to success directly

  return (
    <WizardLayout
      title=""
      ctaLabel="View Applications"
      ctaType="button"
      onCtaClick={() => navigate("/applications")}
    >
      <Message>
        <Title>Congratulations !!!</Title>
        <Subtitle>Your application has been accepted!</Subtitle>
      </Message>
    </WizardLayout>
  );
};

// TODO default impots for every page
