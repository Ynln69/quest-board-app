import { useParams } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/Registerform';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const AuthPage = () => {
  const { id } = useParams();

  return (
    <>
      {id === 'register' && <RegisterForm />}
      {id === 'login' && <LoginForm />}
    </>
  );
};
