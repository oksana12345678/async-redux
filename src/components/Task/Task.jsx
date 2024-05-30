import { Formik, Field, Form } from "formik";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <Formik>
        <Form className={css.Form}>
          <Field
            className={css.checkbox}
            checked={task.completed}
            type="checkbox"
            name="checkBox"
            onChange={handleToggle}
          />
        </Form>
      </Formik>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose className={css.icon} size={24} />
      </button>
    </div>
  );
};
export default Task;
