import { useState } from 'react'

function List() {
  const [task, setTask] = useState(["Go on a run", "Make breakfast", "Drop off keys"])
  const [newTask, setNewTask] = useState("")
  
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

  function moveUp(index) {
    if(index > 0){
      const update = [...task];
      // switch positions
      [update[index], update[index - 1]] = 
      [update[index - 1], update[index]]
      setTask(update)
    }
  }

  function moveDown(index) {
    if(index < task.length - 1){
      const update = [...task];
      // switch positions
      [update[index], update[index + 1]] = 
      [update[index + 1], update[index]]
      setTask(update)
    }
  }

  function editTask(index) {
    const edited = <input
    className='editBar'
    type='text'/>

    const update = [...task];
    // replace string at index here:

    // set updated array as new state
    setTask(update)

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

      <ol>
        {task.map((task, index) =>
        <div key={index} className='list-items'>

          <div className='single-item'>
            <span className='task'><h3><b>{task}</b></h3></span>
            <button className="done-button">
            Done
            </button>
          </div>

          <div className='buttons'>
          <button
            className="button"
            onClick={() => editTask(index)}>
            Edit
          </button>
          
          <button 
            className="delete-button"
            onClick={() => deleteTask(index)}>
            Delete
          </button>
          
          {/* <button 
            className="move-button"
            onClick={() => moveUp(index)}>
            Move up
          </button>
          
          <button 
            className="move-button"
            onClick={() => moveDown(index)}>
            Move down
          </button> */}
          
          </div>
        
        </div>
        )}
      </ol>
    </div>
  )
}

export default List