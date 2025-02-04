import { useState } from "react"

function App() {
  const [firstname, setFirstname] = useState('John Doe')

  const handleChange = (e) => {
    setFirstname(e.target.value)
  }

  const resetFirstname = () => {
    setFirstname('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const [checked, setChecked] = useState(true)
  const toggleCheck = () => {
    setChecked(!checked)
  }


  {/* <form onSubmit={handleSubmit}></form> */ }
  return <form onSubmit={handleSubmit}>
    {/* <input type="text" name="firstname" value={firstname} onChange={handleChange}></input> */}
    <input type="text" name="firstname" defaultValue={"prout"}></input>
    <input type="checkbox" checked={checked} onChange={toggleCheck} />
    {/* {checked && <button>Envoyer</button>} */}

    <button disabled={!checked}>Envoyer</button>

    {/* <button onClick={resetFirstname} type="button">Reset</button> */}
  </form>

  /* Etat controlé 
  Un état avec value et onChange
  */

  /* Etat non controlé 
  pas de value, possibilité d'avoir un defaultValue et d'utiliser un onChange
  */
}

export default App