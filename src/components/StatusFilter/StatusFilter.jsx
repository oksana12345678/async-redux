import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";

const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.statusFilters);

  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };
  return (
    <div className={css.filterContainer}>
      <Button className={css.filterButton}
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button className={css.filterButton}
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button className={css.filterButton}
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
export default StatusFilter;
