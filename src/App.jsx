import { useState } from "react";
import Button from "./components/Button";

function App() {
  // const [değişken, degiskeni setlemek istediğin fonksiyon] = useState()

  const [inputName, setInputName] = useState(null)
  const [data, setData] = useState(null)
  console.log(inputName, "inputName")


  const clickFunc = () => {
    setData(inputName)
  }


  return (
    <>
      <input type="text" onChange={(e) => setInputName(e.target.value)} />
      <button onClick={clickFunc}>TIKLA</button>
      {data}
    </>
  )
}
export default App

