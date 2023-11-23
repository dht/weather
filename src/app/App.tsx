import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMount } from 'react-use';
import { PageFavorites } from '../pages/PageFavorites';
import { PageHome } from '../pages/PageHome';

export const App = () => {
  useMount(() => {
    toast.success('Hello World!');
  });

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<PageHome />} />
        <Route path='/browse' element={<PageFavorites />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};
