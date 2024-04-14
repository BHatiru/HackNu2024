import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AdditionalContent from "./components/AdditionalContent";

import Reading from "./pages/Reading";
import Grammar from "./pages/Grammar";
import Speaking from "./pages/Speaking";
import { ReadingProvider } from "./contexts/ReadingContext";

function App() {
  return (
    <ReadingProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AdditionalContent />
                </>
              }
            />
            <Route path="/reading" element={<Reading />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/speaking" element={<Speaking />} />
          </Routes>
        </div>
      </Router>
    </ReadingProvider>
  );
}

export default App;
