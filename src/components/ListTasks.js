import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTasks = () => {
  const listOfTasks = useSelector((state) => state.listOfTasks);
  const filteredState = useSelector((state) => state.filteredState);

  // console.log(listOfTasks);
  const newList = () => {
    if (filteredState === "all") {
      return listOfTasks;
    }
    if (filteredState === "done") {
      return listOfTasks.filter((el) => el.completed === true);
    }
    if (filteredState === "not_done") {
      return listOfTasks.filter((el) => el.completed === false);
    }
  };
  let finalList = newList();
  return (
    <div>
      {finalList.map((el) => {
        return (
          <div key={el.id}>
            <Task id={el.id} value={el.value} isDone={el.completed} />
          </div>
        );
      })}
    </div>
  );
};

export default ListTasks;
