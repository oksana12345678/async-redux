import Task from "../Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
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
