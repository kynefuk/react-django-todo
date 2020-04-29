import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTodo, updateTodo, deleteTodo, doneTodo } from "../action/action";
import TodoList from "../components/TodoList";
import { TodoState } from "../reducer";
import Todo from "../model/Todo";

interface StateProps {
  todos: Todo[];
}

interface DispatchProps {
  addTodo: (title: string) => void;
  updateTodo: (uuid: string, title: string, done: boolean) => void;
  deleteTodo: (uuid: string) => void;
  doneTodo: (uuid: string) => void;
}

const mapStateToProps = (state: TodoState): StateProps => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addTodo: (title) => dispatch(addTodo(title)),
  updateTodo: (uuid, title, done) => dispatch(updateTodo(uuid, title, done)),
  deleteTodo: (uuid) => dispatch(deleteTodo(uuid)),
  doneTodo: (uuid) => dispatch(doneTodo(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
