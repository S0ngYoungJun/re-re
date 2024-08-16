import {useState} from "react"
import { BsPlus, BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

const Todo = () => {
  const dispatch = useDispatch()
  const [newTodoText, setNewTodoText ]= useState("");
  const [searchTerm, setsearchTerm]= useState("");

  const handleAddToDo = (text) => {
    dispatch(addTodo(text))
  }
  const handleAddToDoClick = () => {
    if(newTodoText.trim() !== ""){
      handleAddToDo(newTodoText.trim());
      setNewTodoText("")
    }
  }
  
  const handleSearchChange = (value) => {
    setsearchTerm(value);
    dispatch()
  }
  return (
    <div className="max-w-2xl mx-auto sm:mt-8 p-4 bg-slate-600 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">할일 관리</h2>
      <div className="flex items-center mb-4">
         <input value={newTodoText} onChange= {(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo"
         className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800"/>
         <button className="ml-4 p-2 bg-blue-300 text-white rounded hover:bg-blue-950
         focus:outline-none" onClick={handleAddToDoClick}><BsPlus/></button> 
      </div> 
      
      <div>
         <div className="flex items-center mb-4">
          <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text"
          name="addTodoInput" id="addTodoInput" placeholder="Add Todo" className="flex-grow p-2 border-b-2
          border-graay-300 focus:outline-none focus:border-blue-500"></input>
         </div>
         <button className="ml-4 p-2 bg-blue-300 text-white rounded hover:bg-blue-950
         focus:outline-none"><BsSearch/></button>
      </div>
    </div>
  )
}

export default Todo