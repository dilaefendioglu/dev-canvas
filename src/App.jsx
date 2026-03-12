import { useEffect, useState } from "react";

function App() {
  // const [değişken, degiskeni setlemek istediğin fonksiyon] = useState()

  const [name, setName] = useState("react")

 /* useEffect(() => {
    setName("selam")

  }, [])
*/

    useEffect( () => {
      setTimeout ( () => {
      setName("4 sn icinde güncellenicek")
      } , 4000)
    })



  return (
    <>
      {name}
    </>
  )
}
export default App

