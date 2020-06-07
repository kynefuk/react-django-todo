import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';

import TodoItem from './TodoItem';
import { AppContext } from '../context/AppContext';

export const TodoList: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <ListGroup>
      {state.todos.length > 0 ? (
        state.todos.map((todo) => <TodoItem key={todo.props.id} todo={todo} />)
      ) : (
        <p className='mt-5'>Todoはありません。</p>
      )}
    </ListGroup>
  );
};
