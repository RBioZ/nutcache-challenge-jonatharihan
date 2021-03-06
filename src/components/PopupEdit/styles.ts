import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const Container = styled.div`
  width: 50%;

  margin: auto;
  margin-top: 5%;

  background-color: #fff;
  border-radius: 5px;

  #close {
    position: absolute;
    z-index: 5;
    height: 5rem;
    width: 5rem;

    right: 2rem;
    top: 2rem;
    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;

    padding: 2rem 3rem;

    div {
      display: flex;
      justify-content: space-between;
      .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      input {
        width: 99%;
      }
    }

    input {
      margin-top: 1rem;
      border: none;
      background-color: rgba(0, 0, 0, 0.07);
      height: 4rem;
      padding-left: 1rem;
    }

    select {
      width: 99%;
      height: 4rem;
      background-color: rgba(0, 0, 0, 0.07);
      padding-left: 1rem;
      border: none;
      font-size: 2rem;
    }

    p {
      margin-top: 2rem;
    }

    button {
      background-color: ${(props) => props.theme.colors.bg_success};
      color: ${(props) => props.theme.colors.bg_light};
      height: 4rem;
      margin-top: 4rem;
      border: none;
      border-radius: 0.3rem;
      width: 48%;

      :hover {
        cursor: pointer;
        opacity: 0.8;
        transition: 500ms;
      }
      :focus {
        outline: 0;
      }
    }
  }
`;
