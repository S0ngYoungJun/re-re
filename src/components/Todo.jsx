import {useState} from "react"
import { BsPlus, BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch()
  const [newTodoText, setNewTodoText ]= useState("");
  const [searchTerm, setSearchTerm]= useState("");

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
    setSearchTerm(value);
    dispatch(updateSearchTerm(value)); // Redux 상태에 searchTerm 업데이트
  };

  return (
    <div className="max-w-2xl mx-auto sm:mt-8 p-4 bg-slate-200 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">할일 관리</h2>
      <div className="flex items-center mb-4">
         <input value={newTodoText} onChange= {(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="할 일 추가"
         className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800"/>
         <button className="ml-4 p-2 bg-blue-300 text-white rounded hover:bg-blue-950
         focus:outline-none" onClick={handleAddToDoClick}><BsPlus/></button> 
      </div> 
      
      <div className="flex items-center justify-between">
          <FilterButton/>
         <div className="flex items-center mb-4">
          <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text"
          name="searchTodoInput" id="searchTodoInput" placeholder="할 일 검색" className="flex-grow p-2 border-b-2
          border-graay-300 focus:outline-none focus:border-blue-500"></input>
         </div>
         <button className="ml-4 p-2 bg-blue-300 text-white rounded hover:bg-blue-950
         focus:outline-none"><BsSearch/></button>
      </div>
      <TodoList></TodoList>
    </div>
  )
}

export default Todo