import Task from "../Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";
import { getTasks, getStatusFilter } from "../../redux/selectors";

const getVisibleTasks = (task, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return task.filter((task) => !task.completed);
    case statusFilters.completed:
      return task.filter((task) => task.completed);
    default:
      return task;
  }
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
