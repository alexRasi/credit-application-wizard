import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0;
  margin-right: auto;
`;

export const WizardContent = styled.section`
  box-sizing: border-box;
  max-width: 720px;

  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 0; /* allow inner scroll */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const Content = styled.div`
  flex: 1;
  min-height: 0; /* crucial for scrolling in flex columns */
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* keeps last card from hiding under the footer */
  padding-bottom: 24px; /* CTA height*/
`;

export const Footer = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  width: 100%;
`;
