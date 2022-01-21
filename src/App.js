import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Outro from "./components/Outro/Outro";
import Hero from "./components/Hero/Hero";
import "./styles/main.scss";
function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Hero/>
        <Features/>
        <Outro/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
