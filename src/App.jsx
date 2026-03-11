import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  const name = "Dilanur Efendioğlu";
  return (
    <>
      <div>
        {name}
      </div>
      <Text number="1" name="REACT" />
      <Text number="2" name="REACTT" />
      <Text number="3" name="REACTTT" />
      <Button name="Giriş" />
      <Button name="ÇIKIS" />
    </>
  )
}
export default App
