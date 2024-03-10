import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./context/authProvider";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        
          <Routes>
            <Route
              path="/"
              element={
                <div className="App">
                  <Banner />
                  <Skills />
                  <Projects />
                  {/* <Contact /> */}
                </div>
              }
            />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
