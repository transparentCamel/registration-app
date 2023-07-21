import styled from 'styled-components';

export const RegistrationFormStyles = styled.section`
  @media only screen and (max-width: 1280px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 64px 0px;
    width: auto;
    border: none;
    .imageContainer {
      display: flex;
      justify-content: center;
    }
    form {
      display: flex;
      flex: 1;
      padding-right: 0px;
      padding-left: 0px;
    }
    .overlay {
      border-radius: 28px;
    }
  }

  display: flex;

  border: 2px solid #f2877d;
  border-radius: 32px;
  width: 1440px;
  margin: 0px 128px;

  .imageContainer {
    position: relative;
    padding: 128px 64px;
    width: 50%;

    .illustrationContainer {
      height: 100%;
      img:not(#logo) {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    #logo {
      position: absolute;
      top: 0;
      margin-top: 32px;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f2877d;
      z-index: -1;
      border-top-left-radius: 28px;
      border-bottom-left-radius: 28px;
    }
  }
  form {
    width: 50%;
  }
`;
