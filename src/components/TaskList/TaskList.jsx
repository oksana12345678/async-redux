import Task from "../Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { selectAllTasks } from "../../redux/tasks/selectors";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
