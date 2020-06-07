import React, { useContext } from 'react';
import { ListGroupItem, Form, Row, Col, Button } from 'react-bootstrap';
import { Todo } from '../model/Todo';
import { AppContext } from '../context/AppContext';
import { API } from '../api';
import { TodoActionType } from '../action';
import { TodoState } from '../reducer/Reducer';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { state, dispatch } = useContext(AppContext);

  const changeDone = async () => {
    todo.props.done = !todo.props.done;
    const api = new API();
    const updatedTodo = await api.updateTodo(todo);
    dispatch({
      type: TodoActionType.UPDATE,
      payload: updatedTodo,
    });
  };

  const onDelete = async () => {
    const api = new API();
    await api.deleteTodo(todo.props.id);
    dispatch({
      type: TodoActionType.DELETE,
      payload: [todo],
    });
  };

  return (
    <ListGroupItem>
      <Row>
        <Col>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='完了済み'
              checked={todo.props.done}
              onChange={changeDone}
            />
          </Form.Group>
        </Col>
        <Col xs={6}>{todo.props.title}</Col>
        <Col>
          <Button variant='danger' onClick={onDelete}>
            削除
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default TodoItem;
