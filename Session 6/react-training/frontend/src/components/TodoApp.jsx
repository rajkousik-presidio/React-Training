import { ApiState } from './ApiState';
import { Todo } from './Todo';
import { useCreateTodos, useGetTodos } from '../api/react-query';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const _TodoApp = ({ todos }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [task, setTask] = useState('');
  
  // Use custom hook to create todos
  const { mutate, isPending } = useCreateTodos();
  
  // Use custom hook to fetch todos and get refetch function
  const { refetch } = useGetTodos();

  console.log('Todos:', todos);

  return (
    <div className="flex flex-column gap-1">
      <div className="flex gap-1">
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          disabled={isPending}
          onClick={() => {
            mutate({ task, id: uuid(), done: false });
            setTask('');
          }}
        >
          {isPending ? 'loading...' : 'Add Todo'}
        </button>
      </div>

      {/* Refetch Todo Button */}
      <div>
        <button onClick={() => refetch()}>Refetch Todos</button>
      </div>

      {/* Todo list rendering */}
      {(todos ?? []).map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export const TodoApp = ApiState(_TodoApp);
