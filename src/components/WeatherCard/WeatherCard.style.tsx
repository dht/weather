import { Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Card)`
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

export const DayOfTheWeek = styled(Typography)``;

export const Value = styled(Typography)``;

export const Description = styled(Typography)``;
