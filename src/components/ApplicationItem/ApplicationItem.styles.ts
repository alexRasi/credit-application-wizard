import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: 0px 2px 4px 2px #00000026;
  box-sizing: border-box;
  width: 100%;
`;

export const CardWrapper = styled.div`
  padding: 4px 6px 8px 6px;
  box-sizing: border-box;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const Email = styled.h3`
  margin: 0;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Meta = styled.p`
  margin: 4px 0 0;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--color-error);
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 16px;

  transition: transform 0.1s ease,

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.99);
    filter: brightness(0.95);
  }
`;
