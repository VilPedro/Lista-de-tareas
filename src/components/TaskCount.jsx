function TaskCount({ tasks, completedCount }) {
    return (
      <div className="border-t border-gray-700 px-6 py-3 bg-gray-800 text-gray-400 flex justify-between text-sm rounded-lg">
        <span>
          {tasks.length} Tarea{tasks.length !== 1 ? "s" : ""}
        </span>
        <span>{completedCount} Completado</span>
      </div>
    );
  }
  
  export default TaskCount;
  