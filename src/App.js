import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { TodoItem } from "./MyComponents/TodoItem";
import { Footer } from "./MyComponents/Footer";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need t go the market to get this job done1",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need t go the market to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the Ghat",
      desc: "You need t go the market to get this job done3",
    },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
