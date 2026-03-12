import { useState } from "react";
import Button from "./components/Button";

function App() {
  // const [değişken, degiskeni setlemek istediğin fonksiyon] = useState()

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sonuç için Tıkla")
  const title = "BAHİS (Bu Sene Kim Şampiyon Olur )"

  return (
    <>
      <div>{title}</div>
      <Button name={"AZALT"} onClick={() => setCount(count - 1)} />
      <Button name={"ARTTIR"} onClick={() => setCount(count + 1)} />
      <div>{count}</div>
      <div onClick={() => setName("FENERBAHÇE")}>{name}</div>
    </>
  )
}
export default App
