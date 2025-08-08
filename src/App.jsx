import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBord from "./Components/NewsBord"


const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBord category={category} />
    </div>
  )
}

export default App
