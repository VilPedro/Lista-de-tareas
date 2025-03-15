function TaskForm({ newTask, setNewTask, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe una tarea"
          className="flex-grow bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </form>
    );
  }
  
  export default TaskForm;
  