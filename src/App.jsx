import { useRef } from "react"

function App() {

  const myinput = useRef()
  const focusFunc = () => {
    myinput.current.focus()
    myinput.current.value = ""
  }

  return (
    <>
      <input type="text" ref={myinput} />
      <button onClick={focusFunc}>FOCUSS </button>
    </>
  )
}
export default App

