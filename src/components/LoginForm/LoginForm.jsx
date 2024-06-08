import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, action) => {
    const { email, password } = values;

    dispatch(
      logIn({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    action.resetForm();
  };

  return (
    <Formik
      contactsSchema={loginSchema}
      onSubmit={handleSubmit}
      initialValues={{ email: "", password: "" }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
