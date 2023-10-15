import classNames from 'classnames';
import { MouseEvent } from 'react';

type FilmTabsProps = {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function TabLink({activeTab, tab, setActiveTab}: FilmTabsProps): JSX.Element {
  const handleNavClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setActiveTab(tab);
  };

  return (
    <li className={classNames('film-nav__item', {'film-nav__item--active': tab === activeTab})}>
      <a href="/" className="film-nav__link" onClick={handleNavClick}>
        {tab}
      </a>
    </li>
  );
}

export default TabLink;
