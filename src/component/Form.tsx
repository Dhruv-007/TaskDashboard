import React, { useState, useEffect } from "react";
import { useGetDummyDataQuery } from "./API/API";
import AddTodoForm from "../AddForm";
import EditTodoForm from "../EditForm";
import Navbar from "./Navbar";

export interface Todo {
  title: string;
  description: string;
  due_date: string;
  status: string;
}

const TodoList: React.FC = () => {
  const { data: initialTodos, isLoading } = useGetDummyDataQuery({});
  const [todos, setTodos] = useState<Todo[]>(initialTodos || []);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [showAddTodoForm, setShowAddTodoForm] = useState<boolean>(false);
  const [showEditTodoForm, setShowEditTodoForm] = useState<boolean>(false); // State to manage displaying EditTodoForm

  useEffect(() => {
    if (initialTodos) {
      setTodos(initialTodos);
    }
  }, [initialTodos]);

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    setShowAddTodoForm(false); // Hide the AddTodoForm after submitting
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditTodo(todos[index]);
    setShowEditTodoForm(true);
  };

  const handleEditSubmit = (updatedTodo: Todo) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = updatedTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditTodo(null);
      setShowEditTodoForm(false); // Hide the EditTodoForm after submitting
    }
  };

  const filteredTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((todo) => {
      if (filterStatus === "All") {
        return true;
      } else {
        return todo.status === filterStatus;
      }
    })
    .map((todo, index) => ({ ...todo, originalIndex: index }));

  const pendingTodos = filteredTodos.filter(
    (todo) => todo.status === "Pending"
  );
  const completedTodos = filteredTodos.filter(
    (todo) => todo.status === "Completed"
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar
        onClick={() => setShowAddTodoForm(true)}
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        filterStatus={filterStatus}
        filterchange={(e) => setFilterStatus(e.target.value)}
      />

      <div className="max-w-5xl mx-auto p-4">
        {showAddTodoForm && (
          <div className="modal-overlay">
            <AddTodoForm
              onAddTodo={handleAddTodo}
              onCancel={() => setShowAddTodoForm(false)}
            />
          </div>
        )}

        {showEditTodoForm && editTodo && (
          <div className="modal-overlay">
            <EditTodoForm
              todo={editTodo}
              onSubmit={handleEditSubmit}
              onCancel={() => {
                setEditIndex(null);
                setEditTodo(null);
                setShowEditTodoForm(false); // Hide the EditTodoForm on cancel
              }}
            />
          </div>
        )}

        <div className="flex flex-row justify-between space-x-4">
          <section>
            <ul>
              {pendingTodos.length > 0 && (
                <h2 className="text-lg font-bold mb-2">Pending Todos</h2>
              )}
              {pendingTodos.map((todo) => (
                <li key={todo.originalIndex} className="mb-4">
                  <div className="border border-gray-300 p-4 rounded-md">
                    <h2 className="text-lg font-bold">{todo.title}</h2>
                    <p>{todo.description}</p>
                    <p>Due Date: {todo.due_date}</p>
                    <p>Status: {todo.status}</p>
                    <div className="mt-2">
                      <button
                        onClick={() => handleDeleteTodo(todo.originalIndex)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditClick(todo.originalIndex)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            {completedTodos.length > 0 && (
              <h2 className="text-lg font-bold mb-2">Completed Todos</h2>
            )}
            <ul>
              {completedTodos.map((todo) => (
                <li key={todo.originalIndex} className="mb-4">
                  <div className="border border-gray-300 p-4 rounded-md">
                    <h2 className="text-lg font-bold">{todo.title}</h2>
                    <p>{todo.description}</p>
                    <p>Due Date: {todo.due_date}</p>
                    <p>Status: {todo.status}</p>
                    <div className="mt-2">
                      <button
                        onClick={() => handleDeleteTodo(todo.originalIndex)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditClick(todo.originalIndex)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2">All Todos</h2>
            <ul>
              {filteredTodos.map((todo) => (
                <li key={todo.originalIndex} className="mb-4">
                  <div className="border border-gray-300 p-4 rounded-md">
                    <h2 className="text-lg font-bold">{todo.title}</h2>
                    <p>{todo.description}</p>
                    <p>Due Date: {todo.due_date}</p>
                    <p>Status: {todo.status}</p>
                    <div className="mt-2">
                      <button
                        onClick={() => handleDeleteTodo(todo.originalIndex)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditClick(todo.originalIndex)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              {filteredTodos.length === 0 && (
                <div className="flex justify-center">
                  <h2 className="text-lg font-bold">No Results Found!!!</h2>
                </div>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
