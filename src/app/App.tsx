import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageFavorites } from '../pages/PageFavorites';
import { PageHome } from '../pages/PageHome';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/home' element={<PageHome />} />
          <Route path='/browse' element={<PageFavorites />} />
          <Route path='/' element={<Navigate to='/home' />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Provider>
  );
};
