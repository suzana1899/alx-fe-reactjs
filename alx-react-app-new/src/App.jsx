import UserProfile from "./components/UserProfile";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to User Profiles</h1>

      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <UserProfile
        name="Bob"
        age="30"
        bio="Passionate about technology and cooking"
      />

      <Counter />

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
