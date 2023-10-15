import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthStatus } from '../../const';
import UserPageLayout from '../../components/user-page-layout/user-page-layout';
import LoginForm from '../../components/login-form/login-form';
import { getAuthStatus } from '../../store/user-process/selectors';
import { store } from '../../store';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

function Login(): JSX.Element {
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  useEffect(() => {
    if (isAuth) {
      store.dispatch(fetchFavoriteFilmsAction());
      navigate(AppRoute.Main);
    }
  }, [isAuth, navigate]);

  return (
    <UserPageLayout title="Sign in">
      <div className="sign-in user-page__content">
        <LoginForm />
      </div>
    </UserPageLayout>
  );
}

export default Login;
