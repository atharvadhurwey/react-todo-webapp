import React, { createContext, useEffect, useState } from "react";
import mockTasks from "./data/tasks.json";
import mockTags from "./data/tags.json";

export const TodoContext = createContext(null);

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [tags, setTags] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      })
    );
  };

  const addTags = (tag) => {
    setTags([...tags, tag]);
  };

  useEffect(() => {
    const tasks = mockTasks;
    const tags = mockTags;
    if (tasks && tags) {
      setTodos(tasks);
      setTags(tags);
    }
  }, []);

  const contextValue = {
    addTodo,
    addTags,
    removeTodo,
    updateTodo,
    todos,
    tags,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
