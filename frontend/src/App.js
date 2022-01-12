//StyleSheets Import
import "./App.css";

//Components Import
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import RecentNews from "./Component/RecentNews/RecentNews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <RecentNews />
    </div>
  );
}

export default App;