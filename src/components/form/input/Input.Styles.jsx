import styled from 'styled-components';

export const InputStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
  }
  .inputContainer {
    @media only screen and (max-width: 1280px) {
      padding-left: 16px;
    }

    display: flex;
    padding: 8px;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      .inputIcons {
        height: 100%;
      }
    }
    input {
      padding: 8px;
      border: none;
      flex: 1;
      &:focus {
        outline: none;
      }
    }
  }
  .focused {
    border: 1px solid #f2877d;
  }
`;
