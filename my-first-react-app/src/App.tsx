import Welcome from "./components/Welcome"
import Header from "./components/Header"
import  Info from "./components/Info"
import './App.css'

function App() {
  

  return (
    <>
      <Header logoText="My First React App"/>
      <Welcome message="Hello!"/>
      <Info firstname="Saki" lastname="Ebina" age={27} isStudent={true}/>
    </>
  )
}

export default App
