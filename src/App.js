import logo from './logo.svg';
import QRCode from "react-qr-code";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <QRCode
        value="https://portfolio-nu-eosin-oftj930o3g.vercel.app/#projects"
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
  );
}

export default App;