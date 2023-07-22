import "./App.scss";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <Sidebar />
      </div>
      <div className="right-side">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
