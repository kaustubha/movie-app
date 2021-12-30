import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderBar from './components/includes/header';
import FooterBar from './components/includes/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieHome from './pages/home';
import FavoritePage from './pages/favorite';
import ErrorPage from './pages/error';
import DetailPage from './pages/detail';
import {FavdataProvider} from './components/allContext';
function App() {
  return (
    <>
      <FavdataProvider>
        <BrowserRouter>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<MovieHome />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="details/:type/:id" element={<DetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <FooterBar />
        </BrowserRouter>
      </FavdataProvider>
    </>
  );
}

export default App;







