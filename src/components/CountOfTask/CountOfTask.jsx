import css from "./CountOfTask.module.css";
import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/selectors";

const CountOfTask = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.task}>Active:{count.active}</p>
      <p className={css.task}>Completed: {count.completed}</p>
    </div>
  );
};
export default CountOfTask;
