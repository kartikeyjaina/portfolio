import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
    </main> 
  )
}

export default App
