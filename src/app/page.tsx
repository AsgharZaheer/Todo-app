"use client";
import { useState } from "react";

export default function Home() {
  // define state
  const [todos,setTodos] = useState([
    { todo:"wakeup early morning", id: 1 },
    { todo: "namaz", id: 2 },
  ]);

  const [inputVal,setInput] = useState("")
  const [id,setId] = useState("0")

  // functions

  const addItems = () => {
    const obj = todos.find((item: { id: string | number }) => item.id === Number(id));

    if (obj) {
      const newArray = todos.filter(item => item.id !== obj.id);
      setTodos([...newArray, { todo: inputVal, id: Number(id) }]);
      setInput("");
      setId(String(0));
      return;
    }

    setTodos([...todos, { todo: inputVal, id: Number(id) }]);
    setInput("");
    setId(String(0));
  };

  const editItem = (id: number) => {
    const obj: { todo: string; id: number } | undefined = todos.find(item => item.id === id);
    if (obj) {
      setInput(obj.todo);
      setId(String(obj.id));
    }
  };

  const delItem = (id: number) => {
    const newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };
    
  

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">
        Todo Application Created By Asghar Zaheer
      </h1>
      {/* Start Input Div */}
      <div className="flex justify-between gap-4 mt-5">
        <input
        type="text"
        value={inputVal}
        onChange={(event) => setInput(event.target.value)}
          className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="Write Todo"
        />
        <input
        type="number"
        value={id}
        onChange={(event) => setId(event.target.value)}
          className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="Write id"
        />
        <button onClick={addItems} className="bg-blue-500 hover:bg-blue-600 w-[20%] text-white p-2 rounded">
          Add Todos
        </button>
      </div>
      {/* End Input Div */}
      {/* Heading */}
      <h1 className="text-center text-[40px] underline mt-5">Todos List</h1>
      {/* Todos List */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* Grid Items */}
      {
        todos.map((item,i)=>{
          return(
            <div className="shadow p-4" key={i}>
          <div className="flex justify-between text-lg">
            <span className="shadow rounded-full h-8 w-8 text-center my-auto">
              {i+1}
            </span>
            <span onClick={()=>delItem(item.id)} className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-700">
              X
            </span>
          </div>

          {/* Data Div */}
          <div className="mt-5 text-[30px] text-gray-700">{item.todo}</div>
          <div>
            <h2 onClick={()=>editItem(item.id)} className="text-right cursor-pointer">Edit</h2>
            
          </div>
        </div>
          )
        })
      }        
        
      </div>
    </div>
  );
}
