import React from 'react';

// checkbox와 label을 렌더링 하는 투두 하나!
export default function Todo({ item }) {
  //   console.log(item);
  const { id, title, done } = item;

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
    </div>
  );
}
