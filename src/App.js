import './App.css';
import { useState } from 'react';


// main app component function
function App() {
  
  
  //TASK THAT REMOVES THE TASK DIV FROM THE PAGE WHEN CLICKED
  const removeTask = (e) => {
    const name = e.target;
    const app = document.querySelector('.App');
    console.log(name);
    app.removeChild(name);
  }

  

  //reset function for refreshing the page and removing all tasks
  function refreshPage() {
    window.location.reload(false);
  }


  //  STATE HOOKS
  const [tasks, setTasks] = useState([
    <div key='task2' name='sample' onClick={removeTask}>sample task</div>
  ])
  
  
  //   HANDLE SUBMIT FUNCTION FOR ADDING A NEW TASK TO THE TASK ARRAY
  const handleSubmit = (event) => {
    //event.preventDefault will prevent the page from refreshing
    event.preventDefault();

    //define what is inside of the input box to submit to the page
    let taskInput = document.getElementById('taskInput').value;

    //if the task is too long, too short, or the invalid text, it will not submit the task
    if(taskInput.length > 50 || taskInput.length <= 0 || taskInput === 'task invalid') {
      return document.getElementById('taskInput').value = 'task invalid';
    }

    //clears the input field when you submit
    document.getElementById('taskInput').value = '';

    //state setter to add a new task div to the tasks div array
    setTasks(prevTask => {
      return [...prevTask, <div key={taskInput} name={taskInput} onClick={removeTask}>{taskInput}</div>]
    })
  }


  //return statement
  return (
    <div className="App">
      <h1>todo app demo</h1>
      <h3>click on task to remove, or click reset to refresh the page</h3>
      {/* when the form is submitted it will call the function handleSubmit to submit the input text and convert it into a div */}
      <form onSubmit={handleSubmit}>
        <input type='text' id='taskInput'></input>
      </form>
      {/* this button refreshes the page. hopefullly you can read */}
      <button onClick={refreshPage}>RESET</button>
      {/* task array is rendered here */}
      {tasks}
    </div>
  );
}

//exports the app component function to be rendered in the browser from index.js
export default App;