import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { RegisterForm } from 'components/RegisterForm/Registerform';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { PropagateLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <PropagateLoader color="#BEDBB0" size={20} />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route index element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute redirectTo="/home" component={<RegisterForm />} />
          }
        />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/home" component={<LoginForm />} />
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<WelcomePage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
