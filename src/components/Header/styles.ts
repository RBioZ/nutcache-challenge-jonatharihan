import styled from 'styled-components';

export const Container = styled.div`
  height: 8rem;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

export const Logo = styled.img``;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.bg_success};
  border: none;

  height: 4rem;
  width: 10rem;

  border-radius: 0.3rem;

  color: ${(props) => props.theme.colors.bg_light};

  :hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 500ms;
  }

  :focus {
    outline: 0;
  }
`;
