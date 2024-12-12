import { TodoItem } from "./todo-item";

export const List = ({ items, onUpdate, onDelete }) => {
  return (
    <div className="space-y-2">
      {items.length > 0 ? (
        items.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No todos available</p>
      )}
    </div>
  );
};
