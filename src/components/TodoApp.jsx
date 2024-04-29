import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { PiPaperPlaneRight } from "react-icons/pi";
import '../App.css';

export default function TodoApp() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(["wkjnk"]);
  const [editableIndex, setEditableIndex] = useState(null);

  const addTask = () => {
    if (inputData.trim() !== '') {
      setItems([inputData.trim(), ...items]);
      setInputData('');
    }
  };

  const deleteTask = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // const editTask = (index) => {
  //   const newTask = prompt('Enter the new task:', items[index]);
  //   if (newTask !== null) {
  //     const updatedItems = [...items];
  //     updatedItems[index] = newTask.trim();
  //     setItems(updatedItems);
  //   }
  // }; Edit with Promt

  const handleEditClick = (index) => {
    setEditableIndex(index);
  };

  return (
    <div className='Contaner'>
    <div className="TodoApp">
      <h1>Todo App</h1>
        <input
          type="text"
          id="todoInput"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className='addtask'>
           Add
        </button>
        <div id="todoList">
          <ul>
            {items.map((task, index) => (
              <li key={index} className="todo-item">
                {editableIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={task}
                      onChange={(e) => {
                        const updatedItems = [...items];
                        updatedItems[index] = e.target.value;
                        setItems(updatedItems);
                      }}
                    />
                    <PiPaperPlaneRight className='save' size={30} onClick={() => setEditableIndex(null)}>Save</PiPaperPlaneRight>
                  </>
                ) : (
                  <>
                    <span>{task}</span>
                    <div className="btns">
                      <button className="edit-btn">
                      <FaRegEdit
                        size={26}
                        onClick={() => handleEditClick(index)}
                      />
                      </button>
                      <button className="delete-btn">
                      <MdDelete
                        size={26}
                        onClick={() => deleteTask(index)}
                        />
                        </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
    </div>
    </div>
  );
}
