import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Home  from "./components/Home";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { GL } from "./components/GL";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Teams from './pages/TeamsPage';
import { AuthProvider } from "./context/authProvider";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sponsorship from "./components/Sponsorship";
import { Gallery } from "./pages/Gallery";
import Oursponsors from "./components/Oursponsors";

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
                <Home />
                <Projects />
                <GL/>
                {/* <Contact /> */}

              </>
            } />
            <Route path="/teams" element={<Teams /> } />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/sponsors" element={<Sponsorship/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/our-sponsors" element={<Oursponsors />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;