import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import TaskList from "./TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/selectors";
import { fetchTask } from "./redux/operations";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <AddTaskForm />
      {isLoading && !error && <b>Loading please wait ...</b>}
      <TaskList />
    </Layout>
  );
};
export default App;