import React, { createContext, useEffect, useState } from "react";
import mockTasks from "./data/tasks.json";
import mockTags from "./data/tags.json";

export const TodoContext = createContext(null);

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]); // State for storing todos
  const [tags, setTags] = useState([]); // State for storing tags
  const [selectedFilters, setSelectedFilters] = useState([]); // State for storing selected filters
  const [hideCompleted, setHideCompleted] = useState(false); // State for hiding completed todos

  const addTodo = (todo) => {
    setTodos([...todos, todo]); // Add a new todo to the todos array
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Remove a todo from the todos array based on its id
  };

  const updateTodo = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo; // Update a todo in the todos array based on its id
        }
        return t;
      })
    );
  };

  const filteredTodos = (selectedFilter) => {
    setSelectedFilters(selectedFilter); // Set the selected filters
    let filtered = todos;
    if (selectedFilter.length > 0) {
      filtered = todos.filter((todo) => {
        return todo.tags.some((tag) => selectedFilter.includes(tag.name)); // Filter todos based on selected tags
      });
    }
    return filtered;
  };

  const hideCompletedTodos = () => {
    setHideCompleted(!hideCompleted); // Toggle the hideCompleted state
  };

  const addTags = (tag) => {
    setTags([...tags, tag]); // Add a new tag to the tags array
  };

  useEffect(() => {
    const tasks = mockTasks;
    const tags = mockTags;
    if (tasks && tags) {
      setTodos(tasks); // Set the initial todos from the mockTasks data
      setTags(tags); // Set the initial tags from the mockTags data
    }
  }, []);

  const contextValue = {
    addTodo,
    addTags,
    removeTodo,
    updateTodo,
    filteredTodos,
    hideCompletedTodos,
    todos,
    tags,
    selectedFilters,
    hideCompleted,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
