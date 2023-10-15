import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ReactNode, memo } from 'react';
import HeaderUserBlock from '../header-user-block/header-user-block';

type HeaderProps = {
  className?: string;
  title?: string;
  favoriteFilmsCount?: number;
  children?: ReactNode;
};

function Header({className, title, favoriteFilmsCount, children}: HeaderProps): JSX.Element {
  return (
    <header className={classNames('page-header', className)}>
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {title &&
        <h1 className="page-title user-page__title">
          {title}
          {favoriteFilmsCount && favoriteFilmsCount > 0 ? <span className="user-page__film-count">{favoriteFilmsCount}</span> : ''}
        </h1>}

      {children}

      <HeaderUserBlock />

    </header>
  );
}

export default memo(Header);
