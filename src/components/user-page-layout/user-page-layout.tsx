import { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

type UserPageLayoutProps = {
  children: ReactNode;
  title: string;
  favoriteFilmsCount?: number;
};

function UserPageLayout({children, title, favoriteFilmsCount}: UserPageLayoutProps): JSX.Element {
  return (
    <div className="user-page">

      <Header className="user-page__head" title={title} favoriteFilmsCount={favoriteFilmsCount}/>

      {children}

      <Footer />

    </div>
  );
}

export default UserPageLayout;
