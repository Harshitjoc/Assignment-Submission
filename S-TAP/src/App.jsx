import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ContactPage from "./components/ContactPage/ContactPage"


function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contactpage" element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
