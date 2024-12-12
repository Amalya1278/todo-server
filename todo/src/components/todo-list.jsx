import { useEffect, useState } from "react";
import axios from "axios";
import { AddTodo } from "./todo-add";
import { List } from "./list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then((res) => setTodos(res.data))
      .catch(() => toast.error("Failed to load todos", { position: "bottom-right" }));
  }, []);
  const handleAdd = (todo) => {
    axios
      .post("http://localhost:4000/todos", todo)
      .then((res) => {
        setTodos([...todos, res.data]);
        toast.success("Todo added ", { position: "bottom-right" });
      })
      .catch(() => toast.error("Failed to add todo", { position: "bottom-right" }));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
        toast.success("Todo deleted ", { position: "bottom-right" });
      })
      .catch(() => toast.error("Failed to delete todo", { position: "bottom-right" }));
  };
  const handleUpdate = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

    axios
      .put(`http://localhost:4000/todos/${id}`, updatedTodo)
      .then(() => {
        setTodos(todos.map((todo) => (todo.id !== id ? todo : updatedTodo)));
        toast.success(
          `Todo marked as ${updatedTodo.completed ? "completed" : "active"}!`,
          { position: "bottom-right" }
        );
      })
      .catch(() => toast.error("Failed to update todo", { position: "bottom-right" }));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <ToastContainer />
      <h3 className="text-lg font-bold text-gray-700 mb-4">Todo List</h3>
      <AddTodo onAdd={handleAdd} />
      <List items={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};
