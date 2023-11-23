import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMount } from 'react-use';

export const PageHome = () => {
  useMount(() => {
    toast.success('Home!');
  });

  return (
    <>
      <Button>Home</Button>
    </>
  );
};
