import React, {useState, useEffect} from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export const Div = () => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
    },2000);    
  },[]);

  return (
    <div>
      <ul className = "ulist">
        { todos.length ? todos.map((item) => {
          return <li className = "list" key={item.id}>
            {item.title} <Button variant="btn btn-warning">Button</Button>
          </li>         
        }): <div class="spinner-grow text-warning" role="status">        
      </div>}
      </ul>
    </div>
  );
};

export default Div;
