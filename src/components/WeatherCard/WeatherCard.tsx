import { CardContent } from '@mui/material';
import { Json } from '../../redux/types';
import { Container, DayOfTheWeek, Description, Value } from './WeatherCard.style';

type WeatherCardProps = {
  item: Json;
  full?: boolean;
};

export const WeatherCard = (props: WeatherCardProps) => {
  const { item } = props;
  const { dayOfWeek, degrees, description } = item;

  return (
    // animated css
    <Container sx={{ minWidth: 225 }} className='animate__animated animate__bounce'>
      <CardContent>
        <DayOfTheWeek variant='h5'>{dayOfWeek}</DayOfTheWeek>
        <Value color='text.secondary'>{degrees}</Value>
        <Description variant='body2'>{description}</Description>
      </CardContent>
    </Container>
  );
};
