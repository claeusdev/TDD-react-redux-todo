import React from 'react';

function TodoForm({currentTodo, changeCurrent}){
  function handleInputChange(e) {
    const val = e.target.value
    changeCurrent(val)
  }
    return (
      <form>
        <input type="text" value={currentTodo} onChange={handleInputChange}/>
      </form>
    );
}

export default TodoForm;