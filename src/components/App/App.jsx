import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const Register = lazy(() => import('../RegisterForm/Registerform'));
const Login = lazy(() => import('../LoginForm/LoginForm'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route index element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute redirectTo="/home" component={<Register />} />
          }
        />
        <Route
          path="/auth/login"
          element={<RestrictedRoute redirectTo="/home" component={<Login />} />}
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
