const title = "Yo la team"
const style = { backgroundColor: "#CCBCB3" }
const showTitle = false
const todos = ["1", "2", "3"]

function App() {

  const handleClick = () => {
    alert('Clique title')
  }

  return <>
    {/* {showTitle && <h1 onClick={handleClick} style={style}>{title}</h1>} */}
    {
      showTitle ? <h1 onClick={handleClick}
        style={style}>{title}</h1> :
        <p style={style}>Pas de titre si false</p>
    }
    {/* hidden */}
    <Title2 color="#796B63" id="demo" className="demo" data-demo="demo">Mon titre 2</Title2>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title2({ color, children, hidden, ...props }) {
  if (hidden) {
    return <p style={style}>Le h2 est hidden</p>
  }

  // const props = {
  //   id: 'idTest',
  //   className: 'classe'
  // }

  return <h2 style={{ color: color }} {...props}>{children}</h2>
}


export default App
