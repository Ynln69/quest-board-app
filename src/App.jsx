import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route index element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
