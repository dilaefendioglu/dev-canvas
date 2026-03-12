import { useState } from "react";

function App() {
  // const [değişken, degiskeni setlemek istediğin fonksiyon] = useState()

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sonuç için Tıkla")
  const title = "BAHİS (Bu Sene Kim Şampiyon Olur )"

  const decrement = () => {
    if(count <= 0) return //0 veya 0 dan kücükse bos dön
    setCount(count - 1)
  }

  return (
    <>
      <div>{title}</div>
      <button onClick={() => setCount(count + 1)} >ARTIR</button>
      <button onClick={decrement}>AZALT</button>
      <div>{count}</div>
      <div onClick={() => setName("FENERBAHÇE")}>{name}</div>
    </>
  )
}
export default App
