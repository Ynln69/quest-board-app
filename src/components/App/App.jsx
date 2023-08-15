import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { RegisterForm } from 'components/RegisterForm/Registerform';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Dashboard } from 'components/Dashboard/Dashboard';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, selectIsLoggedIn } from 'redux/auth/selectors';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const TeamPage = lazy(() => import('../../pages/TeamPage/TeamPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader color="#BEDBB0" size={20} />
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route
          path="/auth/:id"
          element={<PrivateRoute redirectTo="/home" component={<AuthPage />} />}
        />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
        >
          <Route
            path="/home/:boardName"
            element={
              <PrivateRoute redirectTo="/home" component={<Dashboard />} />
            }
          />
        </Route>
        <Route
          path="/home/team"
          element={<PrivateRoute redirectTo="/home" component={<TeamPage />} />}
        />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute
              redirectTo="/auth/login"
              component={<RegisterForm />}
            />
          }
        />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/home" component={<LoginForm />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};
