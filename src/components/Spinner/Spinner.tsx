import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(1turn); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-shadow);
  z-index: 9999; // TODO add var
`;

const Loader = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-primary);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${spin} 1s infinite linear;
`;

export const Spinner = () => (
  <Overlay>
    <Loader />
  </Overlay>
);
