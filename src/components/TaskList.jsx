import Trash from './icons/trash';
import { Plus } from 'lucide-react'; 

function TaskList({ tasks, toggleTaskCompletion, handleDelete }) {
  return (
    <div className='space-y-3 max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar'> 
      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="mb-2">
              <div className="flex items-center justify-between p-4 bg-[#1A1A25] rounded-lg group hover:bg-[#1E1E2C] transition-all border-l-4 border-transparent hover:border-l-[#4C2A6A]">
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className={`cursor-pointer h-6 w-6 flex items-center justify-center rounded-full transition-colors ${
                      task.completed
                        ? "bg-[#4C2A6A] text-white hover:bg-[#5D3580]"
                        : "border-2 border-[#4C2A6A] hover:border-[#7C4DBA]"
                    }`}
                  >
                    {task.completed && "✓"}
                  </button>

                  <span className={`${task.completed ? "text-gray-500 line-through" : "text-gray-100"}`}>
                    {task.name}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="cursor-pointer text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all p-1 rounded-full hover:bg-[#2A2A35]"
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#1A1A25] flex items-center justify-center mb-2">
              {typeof Plus !== 'undefined' ? (
                <Plus size={24} className="text-[#4C2A6A] opacity-50" />
              ) : (
                <span className="text-[#4C2A6A] opacity-50 text-2xl">+</span>
              )}
            </div>
            <p>No hay tareas pendientes</p>
            <p className="text-sm text-gray-600">Agrega una nueva tarea para comenzar</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;