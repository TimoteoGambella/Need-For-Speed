import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiContext } from "./context/ApiContext.jsx";
import Home from "./views/Home.jsx";
import "./styles/styles.scss";

function App() {
  
  return (
    <>
      <ApiContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ApiContext>
    </>
  );
}

export default App;
