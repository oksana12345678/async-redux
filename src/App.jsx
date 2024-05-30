import Layout from "./components/Layout/Layout";
import AppBar from "./components/AppBar/AppBar";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  return (
    <Layout>
      <AppBar />
      <AddTaskForm />
      <TaskList />
    </Layout>
  );
};
export default App;
