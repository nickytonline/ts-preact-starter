import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import TodoItem from '../todo-item';

storiesOf('Todo Item', module)
  .add('with text', () => {

    return (
      <TodoItem
        text="pick up milk"
        />
    );
  });
