import ReactDOM from "react-dom";
import "./styles.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interest from "./components/Interest";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
