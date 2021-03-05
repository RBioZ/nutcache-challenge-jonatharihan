import styled from 'styled-components';

export const Table = styled.table`
  width: 95%;
  margin: 0 3rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-collapse: collapse;
  margin-top: 2rem;

  th {
    font-size: 1.6rem;
    text-align: left;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.bg_light};
    border-color: ${(props) => props.theme.colors.primary};
  }

  table,
  th {
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-collapse: collapse;
  }
`;
