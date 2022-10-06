import "./style.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home";
import RegistrationForm from "./components/registration/registration-form";
import Quiz from "./pages/quiz/quiz";
// import LeaderBoard from "./leaderBoard/leaderBoard";
// import HelpCenter from "./Help Center/helpCenter";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz/registration" element={<RegistrationForm />} />
        <Route exact path="/quiz/start" element={<Quiz />} />
        {/* <Route path="/leaderboard" element={<LeaderBoard />} /> */}
        {/* <Route path="/helpCenter" element={<HelpCenter />} /> */}
      </Routes>
    </div>
  );
}

export default App;