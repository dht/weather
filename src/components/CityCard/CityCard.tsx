import { Json } from '../../redux/types';
import { CityName, Container, Details, Image, Row, Temperature } from './CityCard.style';

export type CityCardProps = {
  currentWeather: Json;
};

export const CityCard = (props: CityCardProps) => {
  const { currentWeather } = props;
  const { cityName, degrees } = currentWeather;

  return (
    <Container>
      <Row>
        <Image></Image>
        <Details>
          <CityName variant='subtitle1'>{cityName}</CityName>
          <Temperature variant='body2'>{degrees}</Temperature>
        </Details>
      </Row>
    </Container>
  );
};
