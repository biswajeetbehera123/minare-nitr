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


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        {/* <Contact /> */}
        {/* <Login /> */}
        {/* <br />
        <Rzrpay /> */}
        {/* <UserMenu />  */}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
