import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
//componente que contém todo o siite e cria o enviroment de rotas / Especifica todas as possíveis rotas / Rota para cada página indívidual
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'


function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
