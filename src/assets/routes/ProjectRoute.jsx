import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../views";
import Purschase from "../views/purschase";

const ProjectRoute = () => {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Index/>} />
                <Route exact path="/purschase" element={<Purschase />} />
                <Route path="*" element={<p>Rota não encontrada</p>} />
            </Routes>
        </Router>
  )
}

export default ProjectRoute