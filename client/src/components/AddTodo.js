import React, { useState } from 'react';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({
      title: '',
    }); // input 초기화
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
