import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  //   justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

export const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0;
`;

export const WizardContent = styled.main`
  box-sizing: border-box;
  max-width: 560px;
  padding: 24px;
  max-height: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
