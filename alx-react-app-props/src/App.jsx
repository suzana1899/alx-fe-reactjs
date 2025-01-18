import { UserProvider } from "./UserContext"; // Import UserProvider
import UserProfile from "./components/UserProfile";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography",
  };

  return (
    <UserProvider value={userData}>
      <div>
        <Header />
        <h1>Welcome to User Profiles</h1>
        <UserProfile /> {/* No need to pass props directly here */}
        <MainContent />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
