import { useState } from 'react'

function List() {
  const [task, setTask] = useState(["Go on a run", "Make breakfast", "Drop off keys"])
  const [newTask, setNewTask] = useState("")
  // track whether an index is being edited. Use -1 as default (not editing)
  const [editingIndex, setEditingIndex] = useState(-1)

  function onChange(e) {
    setNewTask(e.target.value)
  }

  function addTask() {
    // prevent an empty string from being added
    if(newTask.trim() !== ""){
    setTask(prevTask => [...prevTask, newTask])
    setNewTask("")
    }
  }

  function deleteTask(index) {
    const update = task.filter((element, i) => i !== index)
    setTask(update)
  }

  function editTask(index) {
    setEditingIndex(index)
  }
  function saveTask(index, updatedText){
    const update = [...task];
    update[index] = updatedText
    // set updated array as new state
    setTask(update)
    setEditingIndex(-1)
  }

  return (
    <div className="to-do-list">

      {/* add-todo component */}
      <div className='user-input-component'>
        <input
        className="add-task-bar"
        type="text"
        placeholder='Pay car bill'
        value={newTask}
        onChange={onChange}/>

      <button 
        className="add-button" 
        onClick={addTask}>
        <b>+</b>
      </button>
      </div>

      
        {task.map((task, index) =>
        <div key={index} className='list-items'>

          <div className='single-item'>
            <span className='task'onClick={() => finished(index)}>
              <h3><b>{task}</b></h3></span>
            <div className='side-buttons-group'>
            <button className="done-button">
              Done
            </button>
            <button className="edit-button" onClick={() => editTask(index)}>
              Edit
            </button>
            </div>
          </div>

          <div className='buttons'>
          
          
          <button
            className="delete-button"
            onClick={() => deleteTask(index)}>
            Delete
          </button>
          
          </div>
        
        </div>
        )}
    </div>
  )
}

export default List