import React, { useState } from "react";

interface Todo {
  title: string;
  description: string;
  due_date: string;
  status: string;
}

interface AddTodoFormProps {
    onAddTodo: (newTodo: Todo) => void;
    onCancel: () => void; // Include onCancel prop
  }
  

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo ,onCancel}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo({
      title,
      description,
      due_date: dueDate,
      status,
    });
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("");
  };
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onCancel();
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
       <button
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 absolute top-4 right-4"
  onClick={handleCancel}
>
  X
</button>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Due Date:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="" disabled>
            Select status
          </option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="All">All</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
