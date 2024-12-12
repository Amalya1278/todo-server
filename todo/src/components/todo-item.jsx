export const TodoItem = ({ todo: { id, text, description, completed }, onUpdate, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow-md">
      <div>
        <h3 className="text-lg font-medium text-gray-800">{text}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p
          className={`text-sm ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {completed ? "Completed" : "Active"}
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onUpdate(id)}
          className={`px-3 py-1 rounded ${
            completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-800"
          }`}
        >
          {completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
