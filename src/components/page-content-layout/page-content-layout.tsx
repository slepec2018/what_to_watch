import { ReactNode } from 'react';
import classNames from 'classnames';
import Footer from '../footer/footer';

type PageContentLayoutProps = {
  children: ReactNode;
  title: string;
  hideTitle?: boolean;
  className?: string;
};

function PageContentLayout({children, title, hideTitle = false, className}: PageContentLayoutProps): JSX.Element {
  return (
    <div className="page-content">
      <section className={classNames('catalog', className)}>
        <h2 className={classNames('catalog__title', {'visually-hidden': hideTitle})}>
          {title}
        </h2>

        {children}

      </section>

      <Footer />

    </div>
  );
}

export default PageContentLayout;
