import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherCard } from '../components/WeatherCard/WeatherCard';
import * as selectors from '../redux/selectors';
import { Cards, Content } from './PageFavorites.style';
import { Json } from '../redux/types';

export const PageFavorites = () => {
  const forecasts = useSelector(selectors.$forecasts);

  function renderItem(item: Json) {
    return <WeatherCard key={item.EpochDate} item={item} />;
  }

  function renderItems() {
    return forecasts.map((item: Json) => renderItem(item));
  }

  return (
    <>
      <Content>
        <Cards>{renderItems()}</Cards>
      </Content>
    </>
  );
};
