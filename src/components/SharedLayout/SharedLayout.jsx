import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { MenuList } from 'components/MenuList/MenuList';
import { DrumRoll } from 'components/DrumRoll/DrumRoll';
// import { GrInstagram } from "react-icons/gr";
import css from './SharedLayout.module.scss';

export const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className="container">
        <DrumRoll />
        <MenuList />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <footer className={css.foot}>
        <ul className={css.list}>
          <li className={css.item} key={1}>
            <Link className={css.link} to="/about">
              О нас
            </Link>
          </li>
          <li className={css.item} key={2}>
            <Link className={css.link} to="/frequently-asked-questions">
              Часто задываемые вопросы
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
