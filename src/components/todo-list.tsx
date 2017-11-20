import { Component, h } from 'preact';
import TodoItem from './todo-item';

interface TodoListState {
  todos: { text: string }[];
  text: string;
}

export default class TodoList extends Component<{}, TodoListState> {
  state = { todos: [], text: '' };

  setText = (e: Event) => {
    this.setState({
      text: (e.target as HTMLInputElement).value
    } as TodoListState);
  }

  addTodo = () => {
    const { todos, text } = this.state;

    this.setState({
      todos: [...todos, { text }],
      text: ''
    });
  }

  render({}, { todos, text }) {
    return (
      <form onSubmit={this.addTodo} action="javascript:">
        <input value={text} onInput={this.setText} />
        <button type="submit">Add</button>
        <ul>{todos.map(todo => <TodoItem text={todo.text} />)}</ul>
      </form>
    );
  }
}
