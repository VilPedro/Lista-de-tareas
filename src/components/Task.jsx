
import { CheckCircle2, Circle, Trash2 } from "lucide-react"

function Task({ task, toggleTaskCompletion, deleteTask }) {
    return (
      <div className="flex items-center gap-3 p-4 bg-[#1A1A25] rounded-lg group hover:bg-[#1E1E2C] transition-all border-l-4 border-transparent hover:border-l-[#4C2A6A]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleTaskCompletion(task.id)}
            className={`text-[#4C2A6A] hover:text-[#7C4DBA] transition-colors`}
          >{task.completed ? <CheckCircle2 size={22} className="text-[#7C4DBA]" /> : <Circle size={22} />}
          </button>
  
          <span className={`${task.completed ? "text-gray-400 line-through" : "text-gray-100"}`}>
            {task.name}
          </span>
        </div>
  
        <button
          onClick={() => deleteTask(task.id)}
          className="text-gray-500  hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all "
          style={{ background: "none", border: "none", boxShadow: "none" }}
        >
          <Trash2 size={18} />
        </button>
      </div>
    );
  }
  
  export default Task;
  