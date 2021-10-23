import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: #ffaaff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("loginwallpaper.jpg");
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;

  & .Login-box {
    padding: 3rem;
    border-radius: 15px;
    background-color: #3d3bc724;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 7px 2px #0000009e;
  }

  & .Login-title {
    margin: 0;
    text-align: center;
    padding: 1rem;
    font-size: 32px;
    letter-spacing: 0.35rem;
    background: -webkit-linear-gradient(#ff006e, #8338ec, #3a86ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & button {
    border: 0;
    padding: 0.7rem;
    width: 100%;
    border-radius: 23px;
    background-color: purple;
    color: white;
    font-weight: 700;
    cursor: pointer;

    :hover {
      background-color: olive;
    }

    :disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;

export const Field = styled.div`
  height: 60px;

  & input {
    border-radius: 7px;
    border: 0;
    padding: 0.7rem;
    background-color: #0000009e;
    color: white;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #c3c3c39e;
    }
  }
`;

export const MessageError = styled.p`
  margin: 0;
  color: red;
  text-shadow: 0px 0px 5px green;
  text-align: center;
  margin-top: 5px;
`;

export const Spinner = styled.div`
  transform: translateX(360deg);
  animation: 2s linear infinite;
  color: white;
`;
