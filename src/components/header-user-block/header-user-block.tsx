
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus, getCurrentUser } from '../../store/user-process/selectors';

function HeaderUserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const avatar = useAppSelector(getCurrentUser)?.avatarUrl;

  if (isAuth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.MyList} className="user-block__avatar" style={{ display: 'block' }}>
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </Link>
        </li>
        <li className="user-block__item">
          <Link
            to={AppRoute.SignIn}
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default HeaderUserBlock;
