import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    action.resetForm();
  };

  return (
    <Formik>
      <Form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
