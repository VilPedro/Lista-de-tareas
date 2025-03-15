import Trash from './icons/trash';

function TaskList({ tasks, toggleTaskCompletion, handleDelete }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <div className="space-y-1">
          {tasks.map((task, index) => (
            <div key={task.id}>
              <div className="flex items-center justify-between py-3 px-2 hover:bg-gray-700 rounded">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className={`h-6 w-6 flex items-center justify-center rounded-sm border ${
                      task.completed
                        ? "bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                    }`}
                  >
                    {task.completed && "✔"}
                  </button>

                  <span className={`${task.completed ? "text-gray-400 line-through" : "text-gray-100"}`}>
                    {task.name}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="p-0 bg-transparent border-none outline-none shadow-none"
                  style={{ background: "none", border: "none", boxShadow: "none" }}
                >
                  <Trash />
                </button>
              </div>
              {index < tasks.length - 1 && <div className="h-px bg-gray-700" />}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400">Ninguna tarea</p>
          <p className="text-gray-500 text-sm mt-1">Agrega una nueva tarea para empezar</p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
