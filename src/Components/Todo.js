// It's a very old one refer to the latest Todo App in my Repository

import React from "react";
import Delete from "./Delete";
import { FcPlus } from "react-icons/fc";

const Todo = () => {
  // For getting items
  const [list, setList] = React.useState("");
  // for holding or storing items in the form of array
  const [items, setItems] = React.useState([]);
  // Delete item
  const DeleteItem = (id) => {
    console.log("uigugu");

    setItems((olditems) => {
      return olditems.filter((arrayelem, index) => {
        return index != id;
      });
    });
  };

  const ListItems = () => {
    setItems((olditems) => {
      return [...olditems, list];
    });
    setList("");
  };
  return (
    <div>
      <div className="parent">
        <div className="child d-flex align-items-center flex-column">
          <div className="mini">
            <h1 className="text-center mt-4">Todo Shopping Cart </h1>

            <input
              type="text"
              placeholder="Enter your Item"
              className="mt-4 "
              value={list}
              onChange={(e) => setList(e.target.value)}
            />
          </div>
          <li onClick={ListItems} className=" list-unstyled font-large click">
            <FcPlus />
          </li>

          <ul className="mt-4 mr-4 list-unstyled">
            {items.map((cur, index) => {
              return (
                <Delete
                  text={cur}
                  id={index}
                  key={index}
                  onselect={DeleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
