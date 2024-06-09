import React, { useState } from "react";
export interface Todo {
    title: string;
    description: string;
    due_date: string;
    status: string;
  }

interface EditTodoFormProps {
  todo: Todo;
  onSubmit: (todo: Todo) => void;
  onCancel: () => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({
  todo,
  onSubmit,
  onCancel,
}) => {
  const [updatedTodo, setUpdatedTodo] = useState<Todo>(todo);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleDropdownChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = e.target.value;
    if (selectedOption === "Completed" && updatedTodo.status === "Pending") {
      setUpdatedTodo((prevTodo) => ({
        ...prevTodo,
        status: "Completed",
      }));
    } else if (
      selectedOption === "Pending" &&
      updatedTodo.status === "Completed"
    ) {
      setUpdatedTodo((prevTodo) => ({
        ...prevTodo,
        status: "Pending",
      }));
    } else {
      setUpdatedTodo((prevTodo) => ({
        ...prevTodo,
        status: selectedOption,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(updatedTodo);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        name="title"
        value={updatedTodo.title}
        onChange={handleChange}
        className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
      />
      <textarea
        name="description"
        value={updatedTodo.description}
        onChange={handleChange}
        className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
      />
      <input
        type="text"
        name="due_date"
        value={updatedTodo.due_date}
        onChange={handleChange}
        className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
      />
      <select
        onChange={handleDropdownChange}
        value={updatedTodo?.status}
        className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="bg-gray-400 text-white px-4 py-2 rounded-md"
      >
        Cancel
      </button>
    </div>
  );
};

export default EditTodoForm;
