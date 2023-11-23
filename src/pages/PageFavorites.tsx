import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMount } from 'react-use';

export const PageFavorites = () => {
  useMount(() => {
    toast.success('Favorites!');
  });

  return (
    <>
      <Button>Favorites</Button>
    </>
  );
};
