import styled from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  aling-items: center;
  justify-content: center;
  font-size: 16px;
  height: 48px;
  flex: 1;
  cursor: pointer;

  gap: 16px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  color: ${(props) => props.color || 'black'};
  border: ${(props) => props.border};
  border-radius: 8px;
  img {
    height: 100%;
  }
  p {
    height: 100%;
    display: flex;
    justif-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 640px) {
    flex: auto;
  }
`;
