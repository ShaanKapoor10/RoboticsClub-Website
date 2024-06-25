// App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
// import { Projects } from "./components/Card/products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CardPage from "./components/Card/CardPage.jsx";
// const BASE_URL = "http://localhost:8000";
function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className="h-screen">
      <div className={`w-full flex flex-col ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="mt-4 mb-4 ml-4 mr-4">
          <CardPage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
