import InputAdd from './components/InputAdd/InputAdd';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const activeTaskValue = useSelector((state) => {
    return state.activeTask;
  });
  const completedTaskValue = useSelector((state) => {
    return state.completedTask;
  });
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
      const idToActive = parseInt(e.target.closest("li")["id"]);
      const newTaskList = taskListValue.filter(item => {

        return item.id === idToActive;
      });
      console.log(newTaskList);
      dispatch({
        type: "OnTask",
        payload: { num: 1, active: newTaskList }
      });



    } else {

      const idToActive = parseInt(e.target.closest("li")["id"]);
      const newTaskList = taskListValue.filter(item => {

        return item.id !== idToActive;
      });
      console.log(newTaskList);
      dispatch({
        type: "NoOnTask",
        payload: { num: 1, active: newTaskList }
      });
    };
  };

  const deleteTask = (e) => {
    const idToDelete = parseInt(e.target.closest("li")["id"]);
    const completedTask = [];
    const newTaskList = taskListValue.filter(item => {

      return item.id !== idToDelete;
    });
    console.log(idToDelete);
    completedTask.push(taskListValue.slice(idToDelete, 1));
    newTaskList.splice(idToDelete, 0);


    dispatch({
      type: "DeleteTask",
      payload: {
        taskList: newTaskList,
        completed: 1,
        completedTaskEl: completedTask
      }
    })

    // remTellBook(newTellBook);
  };



  const activeTaskList = () => {

    dispatch({
      type: "ActiveTask",
      payload: activeTaskValue
    });
  };

  const allTaskList = () => {

    dispatch({
      type: "AllTask",
      payload: taskListValue
    });
  };


  const completedTaskList = () => {

    dispatch({
      type: "CompletedTask",
      payload: completedTaskValue
    });
  };
  return (
    <>

      <h1>Tasks</h1>
      <p>Active: {activetValue}</p>
      <p>Completed: {completedValue}</p>

      <form onSubmit={addTask}>
        <input type="text" placeholder='Enter task text...' name='textInput' />
        <button type='submit'>Add task</button>
      </form>
      <div>
        <h2>Filter by status</h2>
        <button type='button' onClick={allTaskList}>All</button>
        <button type='button' onClick={activeTaskList}>Active</button>
        <button type='button' onClick={completedTaskList}>Completed</button>
      </div>

      <ul>
        {taskListValue.map(text => {
          return (
            <>
              <li id={text.id} key={text.id}>
                <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTask} />
              </li>
            </>
          );
        })}
      </ul>

    </>
  );
}

export default App;
