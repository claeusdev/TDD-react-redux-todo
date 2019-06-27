import React from "react";
import { connect } from "react-redux";
import { updateCurrent } from "../reducers/todo";

function TodoForm({ currentTodo, changeCurrent }) {
  function handleInputChange(e) {
    const val = e.target.value;
    changeCurrent(val);
  }
  return (
    <form>
      <input type="text" value={currentTodo} onChange={handleInputChange} />
    </form>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {
    currentTodo: state.currentTodo
  };
}

export default connect(
  mapStateToProps,
  { changeCurrent: updateCurrent }
)(TodoForm);
