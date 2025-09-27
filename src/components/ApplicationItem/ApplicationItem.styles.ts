import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
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
  font-size: 16px;
  font-weight: 600;
  color: #171717;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Meta = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 500;
  color: #78716c;
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
  border-radius: 50%;
  background: #dc2626;
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
