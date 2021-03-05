import styled from 'styled-components';

export const Row = styled.tr`
  td {
    height: 5rem;
    border: 1px solid #f0f0f0;
    border-collapse: collapse;

    button {
      background-color: #fff;
      border: none;
      width: 50%;
      height: 100%;

      align-items: center;
      justify-content: center;
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
