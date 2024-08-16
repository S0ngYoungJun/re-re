
const FilterButton = () => {
  return(
    <div className="flex space-x-4 items-center">
      <select>
        <option value="ALL">기본</option>
        <option value="COMPLETED">완료</option>
        <option value="INCOMPLETE">미완료ㅕ</option>
      </select>

    </div>
  )
}