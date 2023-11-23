import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: repeat(40, 1fr);
`;

export const TopLeft = styled.div`
  grid-area: 1 / 1 / 10 / 31;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
`;

export const TopRight = styled.div`
  grid-area: 1 / 31 / 10 / 61;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
`;

export const Center = styled.div`
  grid-area: 10 / 1 / 28 / 61;
`;

export const Bottom = styled.div`
  grid-area: 28 / 1 / 41 / 61;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    margin-right: 20px;
  }
`;

export const Summary = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;
