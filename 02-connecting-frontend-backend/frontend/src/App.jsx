import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <h1>Hello world</h1>
    <p>Jokes: {jokes.length}</p>

    {
      jokes.map((joke, index)=> (
        <div key= {joke.id}>
          <h3>{joke.question}</h3>
          <p>{joke.answer}</p>
        </div>
      ))
    }
    </>
  )
}
export default App