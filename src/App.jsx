import PomodoroTimer from './components/Timer';
import ShortBreak from './components/ShortBreak';
import LongBreak from './components/LongBreak';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<PomodoroTimer />} />
          <Route path="short-break" element={<ShortBreak />} />
          <Route path="long-break" element={<LongBreak />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
