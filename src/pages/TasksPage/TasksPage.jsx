import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasks/operations";
import DocumentTitle from "../../components/DocumentTitle";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import CountOfTask from "../../components/CountOfTask/CountOfTask";
import css from "./TasksPage.module.css";

const TaskPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <section className={css.section}>
        <h2 className={css.title}>Task</h2>

        <CountOfTask />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter By status</h2>

        <StatusFilter />
      </section>

      <DocumentTitle>Your tasks</DocumentTitle>
      <AddTaskForm />
      <div>{isLoading && "Request in progress..."}</div>
    </>
  );
};
export default TaskPage;
