import { h } from 'preact';

interface TodoItemProps {
  text: string;
}

const TodoItem = ({text}: TodoItemProps) => (<li>{text}</li>);

export default TodoItem;
