import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { restorePassword } from "../../redux/slices/auth/operations";
import { useTranslation } from "useTranslation";
import css from "./Restore.module.scss";

export const Restore = () => {
  const t = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t.format)
      .matches(emailPattern, t.emailPatern)
      .required(t.required),
  });

  const initialValue = {
    email: "",
  };

  const submitHandler = async (values, { resetForm }) => {
    const { email } = values;

    const { meta } = await dispatch(restorePassword({ email }));

    if (meta.requestStatus === "fulfilled") {
      navigate("/restore/success");
      window.scrollTo(0, 0);
    }

    resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form className={css.wrapper} autoComplete="off">
            <h2 className={css.header}> {t.login}</h2>
            <Link className={css.link} to={"/login"}>
              {t.enter}
            </Link>
            <label className={css.name}>
              {t.restoreEmail}
              <Field
                className="field"
                type="text"
                name="email"
                autoComplete="off"
              />
              {errors.email && touched.email ? (
                <span className={css.error}>{errors.email}</span>
              ) : null}
            </label>
            <button type="submit" className="btn">
              {t.restorePassword}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
