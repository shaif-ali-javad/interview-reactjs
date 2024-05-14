import "./App.css";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// new home
import Home from "./component/home.jsx";

const Start = lazy(() => import("./component/start.jsx"));
const Gamemode = lazy(() => import("./component/gamemode.jsx"));
const Streak = lazy(() => import("./components/streak.jsx"));
// network ex home
const Play = lazy(() => import("./component/play.jsx"));

// services-details
// const Software = lazy(() => import("./component/home/services-details/software.jsx"));

// partner
// const Sophos = lazy(() => import("./component/partner/sophos.jsx"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/streak" element={<Streak />} />
            <Route path="/play" element={<Play />} />
            <Route path="/start" element={<Start />} />
            <Route path="/gamemode" element={<Gamemode />} />
            
            {/* services-details */}
            {/* <Route path="/software" element={<Software />} />
            <Route path="/sophos" element={<Sophos />} /> */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
