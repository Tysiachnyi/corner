import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import { ROUTES } from './constants/routes';
import AboutUs from './routes/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
