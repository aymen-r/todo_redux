import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER } from "../redux/actions";
import "../App.css";

const Filter = () => {
  const [text, setText] = useState("all");
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch({ type: FILTER, payload: text });
  };
  return (
    <div className="input-group mb-3 input-filter">
      <select
        className="form-select"
        aria-label="Example select with button addon"
        aria-describedby="button-addon2"
        onChange={(e) => setText(e.target.value)}
      >
        <option defaultValue>choose...</option>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not_done">Not Done</option>
      </select>

      <button className="btn btn-secondary" onClick={() => handleFilter()}>
        submit
      </button>
    </div>
  );
};

export default Filter;
