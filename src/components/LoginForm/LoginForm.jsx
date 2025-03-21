import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { emailPattern, passwordPattern } from 'helpers/patterns';
import { register, login } from '../../redux/slices/auth/operations';
import { setEmail } from '../../redux/slices/auth/slice';
import css from './LoginForm.module.scss';

const content = {
  uk: {
    format: '* Введіть дані в потрібному форматі',
    email:
      '* Адреса електронної пошти має містити символ @ і закінчуватись назвою домену після крапки',
    required: "* Обов'язкове поле",
    min: '* Мінімум 8 символів',
    max: '* Максимум 16 символів',
    pass: '* Пароль повинен складатись з велеких та малих латинських літер та цифр',
    token: 'Токен повинен бути без заборонених символів',
    enter: 'Вхід',
    registration: 'Регістрація',
    register: 'Зареєструватись?',
    login: 'Увійти',
    forget: 'Забули пароль?',
    tokenTitle: 'уведіть токен для входу',
    placeholder: 'від 8 до 16 символів',
    owner: 'Як власник бізнесу',
    latin: 'Лише латинські літери',
    upper: 'Хоча б 1 велика літера',
    lower: 'Хоча б 1 маленька літера',
    digit: 'Хоча б 1 цифра',
    employee: 'Як співробітник',
    emailTitle: 'Пошта',
    passTitle: 'Пароль',
  },
  ru: {
    format: '* Введите данные в нужном формате',
    email:
      '* Адрес электронной почты должен содержать символ @ и заканчиваться названием домена после точки',
    required: '* Обязательное поле',
    min: '* Минимум 8 символов',
    max: '* Максимум 16 символов',
    pass: '* Пароль должен содержать большие и маленькие латинские буквы и цифры',
    token: 'Токен должен быть без запрещенных символов',
    enter: 'Вход',
    registration: 'Регистрация',
    register: 'Зарегистрироваться?',
    login: 'Войти',
    forget: 'Забыли пароль?',
    tokenTitle: 'введите токен для входа',
    placeholder: 'от 8 до 16 символов',
    owner: 'Как владелец бизнеса',
    latin: 'Только латинские буквы',
    upper: 'Хотя бы 1 большая буква',
    lower: 'Хотя бы 1 маленькая буква',
    digit: 'Хотя бы 1 цифра',
    employee: 'Как сотрудник',
    emailTitle: 'Почта',
    passTitle: 'Пароль',
  },
  es: {
    format: '* Ingrese los datos en el formato requerido',
    email:
      '* La dirección de correo electrónico debe contener el símbolo @ y terminar con el nombre de dominio después del punto',
    required: '* Campo obligatorio',
    min: '* Mínimo 8 caracteres',
    max: '* Máximo 16 caracteres',
    pass: '* La contraseña debe contener letras mayúsculas y minúsculas y números',
    token: 'El token no debe contener símbolos prohibidos',
    enter: 'Entrar',
    registration: 'Registro',
    register: '¿Registrarse?',
    login: 'Iniciar sesión',
    forget: '¿Olvidaste tu contraseña?',
    tokenTitle: 'Ingrese el token para acceder',
    placeholder: 'de 8 a 16 caracteres',
    owner: 'Como propietario del negocio',
    latin: 'Solo letras latinas',
    upper: 'Al menos 1 letra mayúscula',
    lower: 'Al menos 1 letra minúscula',
    digit: 'Al menos 1 número',
    employee: 'Como empleado',
    emailTitle: 'Correo electrónico',
    passTitle: 'Contraseña',
  },
  tr: {
    format: '* Verileri doğru formatta girin',
    email:
      '* E-posta adresi @ sembolünü içermeli ve nokta sonrası bir alan adı ile bitmelidir',
    required: '* Zorunlu alan',
    min: '* En az 8 karakter',
    max: '* En fazla 16 karakter',
    pass: '* Şifre, büyük ve küçük harfler ile rakamlar içermelidir',
    token: 'Token, yasaklı karakterler içermemelidir',
    enter: 'Giriş',
    registration: 'Kayıt',
    register: 'Kayıt ol?',
    login: 'Giriş yap',
    forget: 'Şifrenizi mi unuttunuz?',
    tokenTitle: 'Giriş yapmak için token girin',
    placeholder: '8 ila 16 karakter arası',
    owner: 'İşletme sahibi olarak',
    latin: 'Sadece Latin harfleri',
    upper: 'En az 1 büyük harf',
    lower: 'En az 1 küçük harf',
    digit: 'En az 1 rakam',
    employee: 'Çalışan olarak',
    emailTitle: 'E-posta',
    passTitle: 'Şifre',
  },
  en: {
    format: '* Enter data in the required format',
    email:
      '* Email adress must contain symbol @ and end with the domain name after dot',
    required: '* Required field',
    min: '* Minimum 8 symbols',
    max: '* Maximum 16 symbols',
    pass: '* The password must contain upper and lowercase Latin letters and numbers',
    token: 'Token must be without restricted symbols',
    enter: 'Login',
    registration: 'Registration',
    register: 'Register?',
    login: 'Login',
    forget: 'Forgot password?',
    tokenTitle: 'enter the token to log in',
    placeholder: 'from 8 to 16 symbols',
    owner: 'As business owner',
    latin: 'Latin letters only',
    upper: 'At least 1 uppercase letter',
    lower: 'At least 1 lowercase letter',
    digit: 'At least 1 digit',
    employee: 'As employee',
    emailTitle: 'Email',
    passTitle: 'Password',
  },
};

export const LoginForm = ({ loginForm = false }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lang = '' } = useSelector(state => state.auth);

  const schema = loginForm
    ? yup.object().shape({
        email: yup
          .string()
          .email(content[lang].format)
          .matches(emailPattern, content[lang].email)
          .required(content[lang].required),
        password: yup.string().required(content[lang].required),
      })
    : yup.object().shape({
        email: yup
          .string()
          .email(content[lang].format)
          .matches(emailPattern, content[lang].email)
          .required(content[lang].required),
        password: yup
          .string()
          .min(8, content[lang].min)
          .max(16, content[lang].max)
          .matches(passwordPattern, content[lang].pass)
          .required(content[lang].required),
      });

  const initialValue = {
    email: '',
    password: '',
  };

  const registerHandler = async newUser => {
    const { meta } = dispatch(register(newUser));

    if (meta.requestStatus === 'fulfilled') {
      dispatch(setEmail({ email: newUser.email }));
      navigate('/register/success');
      window.scrollTo(0, 0);
    }
  };

  const submitHandler = async (values, { resetForm }) => {
    const { email, password } = values;

    const newUser = {
      email: email.toLowerCase(),
      password: password.toLowerCase(),
      lang: lang,
    };
    loginForm ? dispatch(login(newUser)) : registerHandler(newUser);

    resetForm();
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form className={css.wrapper} autoComplete="off">
            <h2 className={css.header}>
              {loginForm ? content[lang].enter : content[lang].registration}
            </h2>
            <Link to={loginForm ? '/register' : '/login'} className={css.link}>
              {loginForm ? content[lang].register : content[lang].login}
            </Link>
            <label className="name">
              {content[lang].emailTitle}
              <Field
                className="field"
                type="text"
                name="email"
                autoComplete="off"
              />
              {errors.email && touched.email && (
                <div className={css.error}>{errors.email}</div>
              )}
            </label>
            <label className="name">
              {content[lang].passTitle}
              <Field
                className={`field ${css.field}`}
                type={isPasswordShown ? 'text' : 'password'}
                name="password"
                autoComplete="off"
              />
              {errors.password && touched.password && (
                <div className={css.error}>{errors.password}</div>
              )}
              <button
                className={css.pass}
                onClick={() => setIsPasswordShown(state => !state)}
                type="button"
                title={isPasswordShown ? 'hide password' : 'show password'}
              >
                {isPasswordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </label>
            {loginForm && (
              <Link to="/restore" className={css.link}>
                {content[lang].forget}
              </Link>
            )}
            <button type="submit" className="btn">
              {loginForm ? content[lang].login : content[lang].register}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
