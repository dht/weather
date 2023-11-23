import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { CityCard } from '../components/CityCard/CityCard';
import { FavoriteButton } from '../components/FavoriteButton/FavoriteButton';
import { WeatherCard } from '../components/WeatherCard/WeatherCard';
import * as selectors from '../redux/selectors';
import { Json } from '../redux/types';
import { Bottom, Cards, Center, Content, Summary, TopLeft, TopRight } from './PageHome.style';

export const PageHome = () => {
  const forecasts = useSelector(selectors.$forecasts);
  const currentWeather = useSelector(selectors.$currentWeather);

  function onClick() {}

  function renderItem(item: Json) {
    return <WeatherCard key={item.EpochDate} item={item} />;
  }

  function renderItems() {
    return forecasts.map((item: Json) => renderItem(item));
  }

  return (
    <>
      <Content>
        <TopLeft>
          <CityCard currentWeather={currentWeather} />
        </TopLeft>
        <TopRight>
          <FavoriteButton full={true} onClick={onClick} />
        </TopRight>
        <Center>
          <Summary variant='h2'>{currentWeather.description}</Summary>
        </Center>
        <Bottom>
          <Cards>{renderItems()}</Cards>
        </Bottom>
      </Content>
    </>
  );
};
