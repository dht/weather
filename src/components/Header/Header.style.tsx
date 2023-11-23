import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 0 20px;
`;

export const H1 = styled(Typography)``;

export const Actions = styled.div`
  a {
    margin: 0 5px;
    color: dodgerblue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
