import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Logo from './logo.jpg';

function App() {

  const [items, setItems] = useState([])
  const [name, setName] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    axios.get('https://actuate-microlearining.onrender.com/items')
      .then(res => {
        setItems(res.data.books);
      })
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://actuate-microlearining.onrender.com/items', { name, author })
      .then((res) => {
        setItems(res.data.books);
      })
  }

  return (
    <div className="main-container">
      
      <nav>
        <h2><img src={Logo} alt="ActuateMicrolearning" /> Bookstore</h2>
      </nav>
      <div className="content-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={e => setAuthor(e.target.value)} required />
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
      
    </div>
  );
}

export default App;
