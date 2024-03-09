import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import UserMenu from "./components/UserMenu";
import Login from "./components/Login";
import { AuthProvider } from "./context/authProvider";
import Rzrpay from "./Rzrpay";
import { Routes, Route ,HashRouter } from "react-router-dom";
import Teams from './pages/TeamsPage';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <NavBar />
          <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
                <Banner />
                <Skills />
                <Projects />
                {/* <Contact /> */}
                {/* <Login /> */}
                {/* <br />
                <Rzrpay /> */}
                {/* <UserMenu />  */}
              </>
            } />
            <Route path="/teams" element={<Teams /> } />
          </Routes>
          </BrowserRouter>
          <Footer />
          </AuthProvider>
    </div>
  );
}

export default App;
