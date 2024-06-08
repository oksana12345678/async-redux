import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";
import { FaTasks } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={css.title}>
          <FaTasks className={css.icon} /> Task manager welcome page!
        </h1>
        <p className={css.desc}>you can add your task and control them</p>
      </div>
    </>
  );
};
export default HomePage;
