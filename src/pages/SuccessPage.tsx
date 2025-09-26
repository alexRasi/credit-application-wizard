import { useNavigate } from "react-router-dom";
import { WizardLayout } from "../components/WizardLayout/WizardLayout";
import styled from "styled-components";

export const Message = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.3;
  color: #4a4a4a;
`;

export const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <WizardLayout title="" onSubmit={() => navigate("/applications")}>
      <Message>
        <Title>Congratulations !!!</Title>
        <Subtitle>Your application has been accepted!</Subtitle>
      </Message>
    </WizardLayout>
  );
};

// TODO default impots for every page
