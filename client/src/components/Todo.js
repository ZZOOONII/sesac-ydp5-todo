import React, { useState } from 'react';


// checkbox와 label을 렌더링 하는 투두 하나!
export default function Todo({ item, deleteItem, updateItem }) {
  //   console.log(item);
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title 클릭하면 readOnly를 false 변경 (수정 가능하도록!!)
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // title 수정
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // Enter 키 누르면 readOnly true 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      updateItem(todoItem); // 엔터키 누르면 저장
    }
  };

  // checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    // console.log(e);
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem); // 체크박스 변경시 저장
  };

  return (
    <div className="todo-item"> {/* CSS 클래스 적용 */}
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
