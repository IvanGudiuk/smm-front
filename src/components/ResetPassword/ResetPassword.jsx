import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { resetPassword } from "redux/slices/auth/operations";
import { useTranslation } from "useTranslation";
import css from "./Verify.module.scss";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;

export const CheckVerify = () => {
  const dispatch = useDispatch();

  const t = useTranslation();

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, t.min)
      .max(16, t.max)
      .matches(passwordPattern, t.pass)
      .required(t.required),
  });

  const initialValue = {
    password: "",
  };

  const submitHandler = async (values, { resetForm }) => {
    const { password } = values;

    dispatch(resetPassword({ password }));

    resetForm();

    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form className={css.wrapper} autoComplete="off">
            <label className={css.name}>
              {t.reset}
              <Field
                className="field"
                type={isPasswordShown ? "text" : "password"}
                name="password"
                placeholder={t.passwordPlaceholder}
                autoComplete="off"
              />
              <button
                type="button"
                className={css.pass}
                onClick={() => setIsPasswordShown((state) => !state)}
              >
                {isPasswordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
              {errors.password && touched.password ? (
                <span className={css.error}>{errors.password}</span>
              ) : null}
            </label>
            <button type="submit" className="btn">
              {t.registrate}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
