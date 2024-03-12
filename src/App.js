import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { GL } from "./components/GL";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Teams from './pages/TeamsPage';
import { AuthProvider } from "./context/authProvider";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sponsorship from "./components/Sponsorship";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path='/' element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <GL/>
                {/* <Contact /> */}

              </>
            } />
            <Route path="/teams" element={<Teams /> } />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/sponsors" element={<Sponsorship/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;