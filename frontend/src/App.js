import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

function App() {

  const [items, setItems] = useState([])
  const [name, setName] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(res => {
        setItems(res.data.books);
      })
  })

  const handleSubmit = (e)=>{
    e.preventDefault();

    axios.post('http://localhost:5000/items',{name,author})
    .then((res)=>{
      setItems(res.data.books);
    })
  }

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={e=>setName(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={e=>setAuthor(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Book Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Author}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
