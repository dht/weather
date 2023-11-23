import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Actions, Container, H1 } from './Header.style';
import { Json } from '../../redux/types';
import { useDispatch } from 'react-redux';
import { setCurrentLocation, setForecasts } from '../../redux/actions';
import { api } from '../../api/apiWeather';

export const Header = () => {
  const dispatch = useDispatch();

  function onSelect(item: Json) {
    if (!item) {
      return;
    }

    dispatch(setCurrentLocation(item));

    api.getForecast(item.Key).then((response) => {
      dispatch(setForecasts(response.data.DailyForecasts));
    });
  }

  return (
    <Container>
      <H1 variant='h1'>Weather App</H1>
      <Search onSelect={onSelect} />
      <Actions>
        <Link to='/home'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </Actions>
    </Container>
  );
};
