import StatusFilter from "../StatusFilter/StatusFilter";
import CountOfTask from "../CountOfTask/CountOfTask";

import css from "./AppBar.module.css";
const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Task</h2>

        <CountOfTask />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter By status</h2>

        <StatusFilter />
      </section>
    </header>
  );
};
export default AppBar;
