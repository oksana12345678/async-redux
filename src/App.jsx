import Layout from "./components/Layout/Layout";
import AppBar from "./components/AppBar/AppBar";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "./redux/selectors";
import { fetchTask } from "./redux/operations";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
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
