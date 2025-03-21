import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from '../../redux/slices/auth/slice';
import { RiAccountBoxFill } from 'react-icons/ri';
// import { MenuList } from 'Components/MenuList/MenuList';
import { LanguageSelect } from 'components/LanguageSelect/LanguageSelect';
import { ReactComponent as Enter } from 'icons/enter.svg';
import { ReactComponent as Britain } from 'icons/britain.svg';
import { ReactComponent as Russia } from 'icons/rus.svg';
import { ReactComponent as Ukraine } from 'icons/ukraine.svg';
import { ReactComponent as Turkey } from 'icons/turkey.svg';
import { ReactComponent as Spain } from 'icons/spain.svg';
import css from './Header.module.scss';

const list = [
  { icon: <Britain />, value: 'en' },
  { icon: <Russia />, value: 'ru' },
  { icon: <Ukraine />, value: 'uk' },
  { icon: <Turkey />, value: 'tr' },
  { icon: <Spain />, value: 'es' },
];

const content = {
  ru: {
    login: 'войти',
    profile: 'личный кабинент',
  },
  uk: {
    login: 'увійти',
    profile: 'особистий кабінет',
  },
  en: {
    login: 'login',
    profile: 'profile',
  },
  es: {
    login: 'Iniciar sesión',
    profile: 'Perfil',
  },
  tr: {
    login: 'Giriş yap',
    profile: 'Profil',
  },
};

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, id, lang } = useSelector(state => state.auth);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Link to="/" className={css.logo}>
          LOGO
        </Link>
        {isLoggedIn ? (
          <div className={css.box}>
            <Link
              to={`/profile/${id}`}
              className={css.profile}
              title={content[lang].profile}
            >
              <RiAccountBoxFill />
            </Link>
          </div>
        ) : (
          <div className={css.box}>
            <Link
              to={'/login'}
              className={css.profile}
              title={content[lang].login}
            >
              <Enter />
            </Link>
          </div>
        )}
        <LanguageSelect
          options={list}
          onSelect={lang => dispatch(setLang(lang))}
          authLang={lang}
        />
      </div>
    </div>
  );
};
