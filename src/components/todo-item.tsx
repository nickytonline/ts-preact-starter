import { h } from 'preact';

interface TodoItemProps {
  text: string;
}

const TodoItem = ({text}: TodoItemProps) => (<li data-cy="todo-item">{text}</li>);

export default TodoItem;
