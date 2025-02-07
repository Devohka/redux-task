import InputAdd from './components/InputAdd/InputAdd';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  clickOnTask,
  clickNoOnTask,
  deleteTask,
  activeTask,
  allTask,
  completedTask,
  addTask
} from "./redux/actions";
import {
  taskList,
  activeTaskEl,
  tasks,
  completedTaskEl,
  active,
  completed
} from './redux/selectors';

function App() {
  const taskValue = useSelector(tasks);
  console.log(taskValue);

  const activeTaskValue = useSelector(activeTaskEl);
  console.log(activeTaskValue, "active");

  const completedTaskValue = useSelector(completedTaskEl);
  console.log(completedTaskValue, "completed");

  const taskListValue = useSelector(taskList);
  console.log(taskListValue, "all");


  const activetValue = useSelector(active);
  const completedValue = useSelector(completed);



  const dispatch = useDispatch();

  const createNumder = () => {
    return Math.round(Math.random() * (9999 - 5) + 5);
  };

  const addTaskfun = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.textInput.value)
    dispatch(addTask(e.currentTarget.elements.textInput.value, createNumder()))
    // {

    //   // payload: {
    //   //   element: e.currentTarget.elements.textInput.value,
    //   //   id: createNumder(),

    //   // }
    // })
  };

  const clickTask = (e) => {
    console.log(e.currentTarget.checked)
    if (e.currentTarget.checked === true) {
      const idToActive = parseInt(e.target.closest("li")["id"]);
      const newTaskList = taskListValue.filter(item => {

        return item.id === idToActive;
      });
      console.log(newTaskList);
      dispatch(clickOnTask(newTaskList));

      //   {
      //   type: "OnTask",
      //   payload: { num: 1, active: newTaskList }
      // }

    } else {
      const idToActive = parseInt(e.target.closest("li")["id"]);
      const newTaskList = taskListValue.filter(item => {

        return item.id !== idToActive;
      });
      console.log(newTaskList);
      dispatch(clickNoOnTask(newTaskList));
      // dispatch({
      //   type: "NoOnTask",
      //   payload: { num: 1, active: newTaskList }
      // });
    };
  };

  const deleteTaskFun = (e) => {
    const idToDelete = parseInt(e.target.closest("li")["id"]);

    const newTaskList = taskListValue.filter(item => {

      return item.id !== idToDelete;
    });
    console.log(idToDelete);

    newTaskList.splice(idToDelete, 0);
    const completedTaskList = taskListValue.filter(item => {

      return item.id === idToDelete;
    });

    dispatch(deleteTask(newTaskList, completedTaskList));
    //   {
    //   type: "DeleteTask",
    //   payload: {
    //     taskList: newTaskList,
    //     completed: 1,
    //     completedTaskEl: completedTaskList
    //   }
    // }


    // remTellBook(newTellBook);
  };



  const activeTaskList = () => {
    dispatch(activeTask("active"));
    // dispatch({
    //   type: "ActiveTask",
    //   payload: "active"
    // });
  };

  const allTaskList = () => {
    dispatch(allTask("all"));
    // dispatch({
    //   type: "AllTask",
    //   payload: "all"
    // });
  };


  const completedTaskList = () => {
    dispatch(completedTask("completed"));
    // dispatch({
    //   type: "CompletedTask",
    //   payload: "completed"
    // });
  };
  return (
    <>

      <h1>Tasks</h1>
      <p>Active: {activetValue}</p>
      <p>Completed: {completedValue}</p>

      <form onSubmit={addTaskfun}>
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
                  <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTaskFun} />
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
                  <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTaskFun} />
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
                  <InputAdd valueText={text.text} onclick={clickTask} ondelete={deleteTaskFun} />
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
