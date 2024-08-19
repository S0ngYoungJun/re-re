import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllComplted } from "../redux/action";

const FilterButton = () => {
   const dispatch = useDispatch()
   const currentFilter = useSelector((state) => state.filter);

   const handleFilter = (filter) => { 
    dispatch(filterTodos(filter))
  }
  return(
    <div className="flex space-x-4 items-center">
      <select
      value={currentFilter}
      onChange={(e) => handleFilter(e.target.value)} 
      className="text-sm px-2 py-1 rounded border border-gray-400 focus:outline-none">
        <option value="ALL">기본</option>
        <option value="COMPLETED">완료</option>
        <option value="INCOMPLETE">미완료</option>
      </select>
      <button onClick={() => dispatch(markAllComplted())} 
      className="text-sm px-2 py-1 bg-purple-400 text-white ml-2 rounded">전부완료표시</button>
    </div>
  )
}

export default FilterButton