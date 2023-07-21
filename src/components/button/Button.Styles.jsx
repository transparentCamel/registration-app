import styled from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  flex: 1;
  cursor: pointer;

  gap: 16px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  color: ${(props) => props.color || 'black'};
  border: ${(props) => props.border};
  border-radius: 8px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;

    .signUpIcons {
      height: 100%;
    }
  }
`;
