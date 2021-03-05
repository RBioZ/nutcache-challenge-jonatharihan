import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  margin-left: 3rem;
`;

export const SubTitle = styled.h3`
  font-weight: normal;
  color: ${(props) => props.theme.colors.text};
  margin-left: 3rem;
`;
