import { useForm } from "react-hook-form";

export const AddTodo = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAdd(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 p-4 bg-white rounded shadow-md">
        <h3 className="text-lg font-medium text-gray-800">Add Todo</h3>
        <input
          {...register("text", { required: "Text is required" })}
          type="text"
          placeholder="Enter todo text"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.text && (
          <p className="text-red-500 text-sm">{errors.text.message}</p>
        )}
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Enter todo description"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};
