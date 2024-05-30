import { Formik, Field, Form } from "formik";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import css from "./AddTaskForm.module.css";
const FormAddTask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const { text } = values;
    dispatch(addTask(text));
    action.resetForm();
  };
  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </Form>
    </Formik>
  );
};
export default FormAddTask;
