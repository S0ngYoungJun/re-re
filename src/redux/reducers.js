import { ADD_TODO, TOGGLE_TODO } from "./actionTypes"
const initialState = {
  todos: [],
  filter: "ALL",
  searchTerm: "",
}

const todoReducer = (state = initialState, action) => {
   switch (action.type){
    case ADD_TODO:
      return {
        todos: [...state.todos, {text: action.payload.text, complete:false}],
        filter: state.filer,
        searchTerm: state.searchTerm 
      }
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) => 
        index === action.payload.id ? {... todo, completed: !todo.completed} : todo),
      } 

    default:
      break;
     
   }
}

export default todoReducer