import Api from "./Component/Api"
import Contact from "./Component/Contact"
import Erro from "./Component/Erro"
import Home from "./Component/Home"
import Privacy from "./Component/Privacy"
import Report from "./Component/Report"
import Terms from "./Component/Terms"
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
          <Route path="/report" element={<Report />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />

          {/* Should be last route */}
          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
