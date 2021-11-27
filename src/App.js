import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { useState, useEffect } from "react";
import { About } from "./MyComponents/About"
import { AddTodo } from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); //Error here in todos
  }
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0 || todos === undefined) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  };
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
     <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
          <Route exact path="/" element ={ 
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete} />
        </>
        } 
        // render={()=>{
        //     return(
        //     <>
        //     <AddTodo addTodo={addTodo} />
        //     <Todos todos={todos} onDelete={onDelete} /> 
        //     </>)}}
          > 
          </Route>
          <Route exact path="/about" element={<About/>}> 
          
          </Route> 
        </Routes> 
        {/* <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> */}
      <Footer />
    </Router>
    </>
  );
}

export default App;
