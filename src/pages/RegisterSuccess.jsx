import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Success } from 'icons/successIcon.svg';
import { resendVerify } from '../redux/slices/auth/operations';
import css from './RegisterSuccess.module.scss';

const content = {
  ru: {
    text: 'Мы отправили на вашу почту письмо. Перейдите по ссылке в письме, чтобы закончить процесс регистрации.',
    ask: 'Не пришло письмо?',
    btn: 'Отправить повторно',
  },
  uk: {
    text: 'Ми надіслали лист на вашу електронну пошту. Перейдіть за посиланням у листі, щоб завершити процес реєстрації.',
    ask: 'Не отримали лист?',
    btn: 'Надіслати повторно',
  },
  en: {
    text: 'We have sent an email to your inbox. Follow the link in the email to complete the registration process.',
    ask: 'Didn’t receive the email?',
    btn: 'Resend',
  },
  es: {
    text: 'Hemos enviado un correo electrónico a tu bandeja de entrada. Sigue el enlace en el correo para completar el proceso de registro.',
    ask: '¿No recibiste el correo?',
    btn: 'Reenviar',
  },
  tr: {
    text: 'E-postanıza bir mesaj gönderdik. Kayıt işlemini tamamlamak için lütfen e-postadaki bağlantıya tıklayın.',
    ask: 'E-posta gelmedi mi?',
    btn: 'Tekrar gönder',
  },
};

const RegisterSuccess = () => {
  const { lang, email = '' } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Success />
      <span className={css.text}>{content[lang].text}</span>
      <span className={css.ask}>{content[lang].ask}</span>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(resendVerify({ email }))}
      >
        {content[lang].btn}
      </button>
    </div>
  );
};

export default RegisterSuccess;
