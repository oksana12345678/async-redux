import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { fetchTask } from "./redux/operations";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const TasksPage = lazy(() => import("../pages/TasksPage"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={Home} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </Layout>
  );
};
export default App;
