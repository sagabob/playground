import React, { useState, useEffect } from 'react'
import AppRoute from './AppRoute';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Demo from './pages/Demo';
import { detectScreenMode } from './utils/helpers';
import { IsDesktop } from './utils/constants';
import { AppContextProvider } from './AppContext';
import './App.scss';

const App = () => {

  const [screenSizeMode, setScreenSizeMode] = useState(IsDesktop);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleScrollEvent = () => {

    const scrollTop = window.scrollY;

    setScrollValue(scrollTop)
  };

  const handleWindowSizeChange = () => {
    
    const outputScreenMode = detectScreenMode(window.innerWidth);

    setScreenSizeMode(outputScreenMode);

  };

  return (
    <AppContextProvider value={{ screenSizeMode, scrollValue }}>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="playground" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="demo" element={<Demo />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;

