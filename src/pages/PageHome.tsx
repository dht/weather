import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMount } from 'react-use';
import * as selectors from '../redux/selectors';

export const PageHome = () => {
  const forecasts = useSelector(selectors.$forecasts);

  useMount(() => {
    toast.success('Welcome!');
  });

  return (
    <>
      <Button>Home</Button>
    </>
  );
};
