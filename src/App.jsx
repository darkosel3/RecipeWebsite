
import HomePage from "./pages/HomePage"
import SideBar from "./components/SideBar"
import FavoritesPage from "./pages/FavoritesPage"
import { Route,Routes } from "react-router-dom"
function App() {

  return (
    <div className="flex">
      <SideBar />    
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>         
    </div>
  )
}

export default App
