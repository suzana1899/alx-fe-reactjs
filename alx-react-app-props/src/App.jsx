import { UserProvider } from "./UserContext"; // Import UserProvider
import UserProfile from "./components/UserProfile"; // Import UserProfile
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <UserProvider>
      {" "}
      {/* Wrap your app with the UserProvider */}
      <div>
        <Header />
        <h1>Welcome to User Profiles</h1>
        <UserProfile /> {/* Context data will flow here */}
        <MainContent />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
