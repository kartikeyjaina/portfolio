import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

function App() {
  const [windowsState, setWindowsState] = useState({
    note: false,
    resume: false,
    Spotify: false,
    cli: false,
  });
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      
      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}
    </main>
  );
}

export default App;
