import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Success } from 'icons/successIcon.svg';
import { Loader } from 'components/Loader/Loader';
import { verify } from '../redux/slices/auth/operations';
import css from './Verify.module.scss';

const content = {
  ru: {
    text: 'Ваша почта верифицирована.',
    special: 'Теперь можете перейти в свой профиль.',
  },
  uk: {
    text: 'Ваша пошта веріфікована.',
    special: 'Тепер можете перейти у свій профіль.',
  },
  en: {
    text: 'Your email verified.',
    special: 'Now you can follow to your profile.',
  },
  es: {
    text: 'Tu correo electrónico ha sido verificado.',
    special: 'Ahora puedes acceder a tu perfil.',
  },
  tr: {
    text: 'E-posta adresiniz doğrulandı.',
    special: 'Artık profilinize girebilirsiniz.',
  },
};

const Verify = () => {
  const [success, setSuccess] = useState(false);

  const initialMount = useRef(null);

  const { token = '' } = useParams();

  const { lang } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const userVerify = async () => {
  //     if (!initialMount.current) {
  //       const { meta } = await dispatch(verify({ token }));

  //       if (meta.requestStatus === 'fulfilled') {
  //         initialMount.current = true;
  //         setSuccess(true);
  //       }
  //     }
  //   };

  //   if (token) userVerify();
  // }, [token, dispatch]);

  return !success ? (
    <div className={css.wrapper}>
      <p className={css.info}>
        <Success />
        {content[lang].text}
        <br />
        {content[lang].special}
      </p>
    </div>
  ) : (
    <Loader />
  );
};

export default Verify;
