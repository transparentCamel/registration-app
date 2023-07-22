import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px;
  margin-bottom: 64px;

  @media only screen and (max-width: 1280px) {
    padding: 0px;
  }
  .topTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      margin-bottom: 16px;
      font-size: 32px;
    }
    a {
      text-decoration: none;
      color: #f2877d;
    }
  }

  .btnContainer {
    display: flex;
    gap: 32px;
    margin-top: 16px;
    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 0px;
  }
  p {
    margin: 0px;
  }

  #submit {
    border: none;
    background-color: #f2877d;
    color: white;
    padding: 8px 0px;
    font-size: 24px;
    margin-top: 32px;
    border-radius: 8px;
  }
`;
