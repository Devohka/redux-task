import InputAdd from './components/InputAdd/InputAdd';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const taskValue = useSelector((state) => {
    return state.tasks;
  });
  console.log(taskValue);

  const activeTaskValue = useSelector((state) => {
    return state.activeTask;
  });
  console.log(activeTaskValue, "active");

  const completedTaskValue = useSelector((state) => {
    return state.completedTask;
  });
  console.log(completedTaskValue, "completed");

  const taskListValue = useSelector((state) => {
    return state.taskList;
  });
  console.log(taskListValue, "all");


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

    const newTaskList = taskListValue.filter(item => {

      return item.id !== idToDelete;
    });
    console.log(idToDelete);

    newTaskList.splice(idToDelete, 0);
    const completedTaskList = taskListValue.filter(item => {

      return item.id === idToDelete;
    });

    dispatch({
      type: "DeleteTask",
      payload: {
        taskList: newTaskList,
        completed: 1,
        completedTaskEl: completedTaskList
      }
    })

    // remTellBook(newTellBook);
  };



  const activeTaskList = () => {

    dispatch({
      type: "ActiveTask",
      payload: "active"
    });
  };

  const allTaskList = () => {

    dispatch({
      type: "AllTask",
      payload: "all"
    });
  };


  const completedTaskList = () => {

    dispatch({
      type: "CompletedTask",
      payload: "completed"
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

        {taskValue === "all" && (
          taskListValue.map(text => {
            return (
              <>
                <li id={text.id} key={text.id}>
                  <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTask} />
                </li>
              </>
            );
          })
        )}


        {taskValue === "active" && (

          activeTaskValue.map(text => {
            return (
              <>
                <li id={text.id} key={text.id}>
                  <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTask} />
                </li>
              </>
            );
          })


        )}


        {taskValue === "completed" && (
          completedTaskValue.map(text => {
            return (
              <>
                <li id={text.id} key={text.id}>
                  <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTask} />
                </li>
              </>
            );
          })
        )}

      </ul>

    </>
  );
}

export default App;
