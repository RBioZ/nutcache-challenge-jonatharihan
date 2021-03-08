import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vmax;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: ${(props) => props.theme.colors.bg_success};
    color: ${(props) => props.theme.colors.bg_light};
    height: 4rem;
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
`;
