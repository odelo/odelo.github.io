import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
