import { useState } from 'react'

function List() {
  const [task, setTask] = useState(["Go on a run", "Eat breakfast", "Drop off keys"])
  const [newTask, setNewTask] = useState("")
  
  function onChange(e){
    setNewTask(e.target.value)
  }

  function addTask(){
    // prevent an empty string from being added
    if(newTask.trim() !== ""){
    setTask(prevTask => [...prevTask, newTask])
    setNewTask("")
    }
  }

  function deleteTask(index){
    const update = task.filter((element, i) => i !== index)
    setTask(update)
  }

  function moveUp(index){
    if(index > 0){
      const update = [...task];
      // switch positions
      [update[index], update[index - 1]] = 
      [update[index - 1], update[index]]
      setTask(update)
    }
  }

  function moveDown(index){
    if(index < task.length - 1){
      const update = [...task];
      // switch positions
      [update[index], update[index + 1]] = 
      [update[index + 1], update[index]]
      setTask(update)
    }
  }

  return (
    <div className="to-do-list">
      <h1 className='header'>todo list</h1>

      <div>
        <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={onChange}/>

        <button 
          className="add-button" 
          onClick={addTask}>
          add
        </button>
      </div>

      <ol>
        {task.map((task, index) =>
  
        <li key={index}>
          <span className="text">{task}</span>
          
          <button 
            className="delete-button"
            onClick={() => deleteTask(index)}>
            Delete
          </button>

          <button 
            className="move-button"
            onClick={() => moveUp(index)}>
            Move up
          </button>
          
          <button 
            className="move-button"
            onClick={() => moveDown(index)}>
            Move down
          </button>
        
        </li>
        )}
      </ol>
    </div>
  )
}

export default List