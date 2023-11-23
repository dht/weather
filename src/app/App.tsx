import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { useMount } from 'react-use';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  useMount(() => {
    toast.success('Hello World!');
  });

  return (
    <>
      <Button>Good</Button>
      <ToastContainer />
    </>
  );
};
