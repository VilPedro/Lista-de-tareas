function TaskForm({ newTask, setNewTask, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe una tarea"
          className="flex-1 px-4 py-3 rounded-lg bg-[#1E1E2C] text-white border border-[#2D1842] focus:outline-none focus:border-[#4C2A6A] transition-all placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="cursor-pointer px-4 py-3 bg-[#4C2A6A] hover:bg-[#5D3580] text-white rounded-lg flex items-center gap-1 transition-colors"
        >
          Agregar
        </button>
      </form>
    );
  }
  
  export default TaskForm;
  