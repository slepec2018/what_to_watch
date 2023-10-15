import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import UserPageLayout from '../../components/user-page-layout/user-page-layout';

function NotFound(): JSX.Element {
  return (
    <UserPageLayout title="Not Found">
      <div className="sign-in user-page__content">
        <div className="sign-in__message">
          <Link className="user-block__link" to={AppRoute.Main}>Go to home 🏠</Link>
        </div>
      </div>
    </UserPageLayout>
  );
}

export default NotFound;
