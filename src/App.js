import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopBtn from "./components/elements/ScrollToTopBtn";
import Homepage from "./pages/Homepage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* homepage */}
        <Route path="/" exact element={<Homepage />}/>
      </Routes>
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
}

export default App;
