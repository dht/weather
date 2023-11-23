import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Actions, Container, H1 } from './Header.style';

export const Header = () => {
  return (
    <Container>
      <H1 variant='h1'>Weather App</H1>
      <Search />
      <Actions>
        <Link to='/home'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </Actions>
    </Container>
  );
};
