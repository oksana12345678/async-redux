import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "../redux/constants";

export const selectTasks = (state) => state.tasks.items;
export const selectStatusFilter = (state) => state.filters.status;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks. Now memoized!");

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (count, task) => {
      console.log(" Now memoized!");
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
