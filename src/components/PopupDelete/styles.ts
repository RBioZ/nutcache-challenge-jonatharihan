import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vmax;
`;

export const Container = styled.div`
  width: 50%;

  margin: auto;
  margin-top: 5%;

  background-color: #fff;
  border-radius: 5px;

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
`;
