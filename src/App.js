import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Teams from './pages/TeamsPage';
import { AuthProvider } from "./context/authProvider";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path='/' element={
              <>
                <Banner />
                <Skills />
                <Projects />
                {/* <Contact /> */}
              </>
            } />
            <Route path="/teams" element={<Teams /> } />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;