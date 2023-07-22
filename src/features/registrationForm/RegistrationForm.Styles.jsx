import styled from 'styled-components';

export const RegistrationFormStyles = styled.section`
  @media only screen and (min-width: 1280px) {
    width: 1440px;
  }

  @media only screen and (max-width: 1280px) {
    align-items: center;
    flex-direction: column;
    width: auto;
    border: none;
    gap: 64px;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  display: flex;

  border: 2px solid #f2877d;
  border-radius: 32px;
  width: 100%;
  max-width: 1440px;
  margin: 0px 128px;

  .imageContainer {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    padding: 64px;
    width: 50%;
    background-color: #f2877d;
    @media only screen and (max-width: 1280px) {
      border-radius: 32px;
      width: 100%;
    }
    @media only screen and (max-width: 640px) {
      padding: 32px;
    }
    #logo {
      width: 40%;
    }
    img:not(#logo) {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .messageContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        color: white;
        text-align: center;
        width: auto;
        font-size: 32px;
        padding: 0px 64px;
        @media only screen and (max-width: 640px) {
          font-size: 24px;
          padding: 0px 16px;
        }
      }
    }
  }
  form {
    width: 50%;
  }
`;
