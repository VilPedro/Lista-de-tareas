function TaskCount({ tasks, completedCount }) {
    return (
      <div className="bg-[#1A0B26] px-6 py-4 flex justify-between text-sm">
        <span className="text-gray-400">
          {tasks.length} Tarea{tasks.length !== 1 ? "s" : ""}
        </span>
        <span className="text-[#9D6BC9]">{completedCount} Completado</span>
      </div>
    );
  }
  
  export default TaskCount;
  