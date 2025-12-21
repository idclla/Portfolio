// src/App.tsx
import { useEffect, useState } from "react";
import PortfolioLanding from "./components/PortfolioLanding";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShowSplash(false), 1500);
    return () => window.clearTimeout(t);
  }, []);

  return showSplash ? <SplashScreen /> : <PortfolioLanding />;
}

export default App;
