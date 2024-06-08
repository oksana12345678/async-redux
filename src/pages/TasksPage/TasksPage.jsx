import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasks/operations";
import DocumentTitle from "../../components/DocumentTitle";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";

const TaskPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <AddTaskForm />
      <TaskList />
      <div>{isLoading && "Request in progress..."}</div>
    </>
  );
};
export default TaskPage;
