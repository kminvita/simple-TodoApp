import React from 'react';

export default function Lists({ todoData, setTodoData }) {
    const getStyle = (completed) => {
        return {
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: completed ? "line-through" : "none"
        }
      };

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right" 
      }

      const handleCompletedChange = (id) => {
        let newTodoData = todoData.map(data => {
          if(data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        })
    
        setTodoData(newTodoData);
      };

      const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        setTodoData(newTodoData);
      };

  return (
    <div>
        {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} onChange={() => handleCompletedChange(data.id)} />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
          </div>
          ))}
    </div>
  )
}
