import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { PageFavorites } from '../pages/PageFavorites';
import { PageHome } from '../pages/PageHome';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Content>
          <Routes>
            <Route path='/home' element={<PageHome />} />
            <Route path='/favorites' element={<PageFavorites />} />
            <Route path='/' element={<Navigate to='/home' />} />
          </Routes>
        </Content>
        <ToastContainer position='bottom-center' />
      </Router>
    </Provider>
  );
};

export const Content = styled.div`
  flex: 1;
  display: flex;
  margin-top: 80px;
  --background: #fff;
  --grid: rgba(30, 0, 0, 0.06);
  background-color: var(--background);
  background-size: 25px 25px;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
`;
