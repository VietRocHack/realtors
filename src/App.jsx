import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Settings from "./pages/Settings/Settings"
import Live from "./pages/Live/Live"
import EndPage from "./pages/EndPage/EndPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/live" element={<Live />} />
        <Route path="/endpage" element={<EndPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
