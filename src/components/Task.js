import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE, EDIT, DONE } from "../redux/actions";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const Task = ({ id, value, isDone }) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(value);

  const dispatch = useDispatch();

  // delete tasks:
  const handleDelete = (id) => {
    dispatch({
      type: DELETE,
      payload: id,
    });
  };
  // edit tasks:
  const submitEdit = (id) => {
    dispatch({
      type: EDIT,
      payload: {
        id: id,
        newText: editText,
      },
    });
    setEdit(null);
    // setEditText("");
  };
  //   toggle complete:
  const toggle = (id) => {
    dispatch({
      type: DONE,
      payload: id,
    });
  };
  return (
    <>
      {edit === id ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="btn btn-success m-3"
            onClick={() => submitEdit(id)}
          >
            Submit Edit
          </button>
        </div>
      ) : (
        <div className={`task ${isDone && "completed"}`}>
          <span>{value}</span>
        </div>
      )}

      <MdDelete className="delete-icon" onClick={() => handleDelete(id)} />
      <FaEdit className="edit-icon" onClick={() => setEdit(id)} />

      <FiCheckCircle className="done-icon" onClick={() => toggle(id)} />
    </>
  );
};

export default Task;
