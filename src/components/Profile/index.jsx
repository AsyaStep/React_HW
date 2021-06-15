import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateTodo } from "../../store/todos";
import { ListGroupItem } from "react-bootstrap";

export const Profile = () => {
  const [change, setChange] = useState("");
  const todos = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const handlerChangeInput = (e) => {
    setChange(e.target.value);
  };

  const handlerAddTodo = () => {
    const data = {
      title: change,
      id: Date.now(),
    };
    dispatch(actionCreateTodo(data));
  };

  return (
    <div>
      <input
        placeholder="add task"
        value={change}
        onChange={(event) => handlerChangeInput(event)}
      ></input>
      <button onClick={handlerAddTodo}>ADD</button>
      {todos.point.map((item) => 
        <ListGroupItem key={item.id}>{item.title}</ListGroupItem>
      )}
    </div>
  );
};

export default Profile;
