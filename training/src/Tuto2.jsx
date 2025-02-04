import { useState } from "react"

function App() {

  const [person, setPerson] = useState({
    firstName: "John",
    name: "Doe",
    age: 10
  })

  const increment = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

  const decrement = () => {
    if (person.age === 0) return
    setPerson({ ...person, age: person.age - 1 })
  }

  return <>
    <p>Age de {person.firstName}: {person.age}</p>
    <button onClick={increment}>Gagner une année</button>
    <button onClick={decrement}>Enlever une année</button>
  </>
}


export default App
