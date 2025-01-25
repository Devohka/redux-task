import InputAdd from './components/InputAdd/InputAdd';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const taskListValue = useSelector((state) => {
    return state.taskList;
  });
  const activetValue = useSelector((state) => {
    return state.active;
  });
  const completedValue = useSelector((state) => {
    return state.completed;
  });
  const dispatch = useDispatch();

  const createNumder = () => {
    return Math.round(Math.random() * (9999 - 5) + 5);
  };

  const addTask = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.textInput.value)
    dispatch({
      type: "AddTask",
      payload: {
        text: e.currentTarget.elements.textInput.value,
        id: createNumder(),
      }
    })
  };

  const clickTask = (e) => {
    console.log(e.currentTarget.checked)
    if (e.currentTarget.checked === true) {
      dispatch({
        type: "OnTask",
        payload: 1
      })
    } else {
      dispatch({
        type: "NoOnTask",
        payload: 1
      })
    }
  };

  const deleteTask = (e) => {
    const idToDelete = parseInt(e.target.closest("li")["id"]);
    const newTaskList = taskListValue.filter(item => {
  
      return item.id !== idToDelete;
    });
    console.log(idToDelete);
    newTaskList.splice(idToDelete, 0);
    dispatch({
      type: "DeleteTask",
      payload: {
        taskList: newTaskList,
        completed: 1,
      }
    })

    // remTellBook(newTellBook);
  };

  return (
    <>

      <h1>Tasks</h1>
      <p>Active: {activetValue}</p>
      <p>Completed: {completedValue}</p>

      <form onSubmit={addTask}>
        <input type="text" placeholder='Enter task text...' name='textInput'/>
        <button type='submit'>Add task</button>
      </form>


      <ul>
        {taskListValue.map(text => {
          return (
            <>
              <li id={text.id} key={text.id}>
                <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTask}/>
              </li>
            </>
          );
        })}
      </ul>

    </>
  );
}

export default App;
