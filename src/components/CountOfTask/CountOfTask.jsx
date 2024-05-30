import css from "./CountOfTask.module.css";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
const CountOfTask = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.task}>Active:{count.active}</p>
      <p className={css.task}>Completed: {count.completed}</p>
    </div>
  );
};
export default CountOfTask;
