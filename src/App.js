import "./style.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home";
import RegistrationForm from "./components/registration/registration-login-form";
import Quiz from "./pages/quiz/quiz";
import { useSelector } from "react-redux";
import Admin from "./pages/admin/admin";


// import LeaderBoard from "./leaderBoard/leaderBoard";
// import HelpCenter from "./Help Center/helpCenter";

function App() {
  console.log("---App---")
  const state = useSelector((state) => state.quiz);
  return (
    <div className="main-contaner">
      <Admin />
      {/* <Sidebar /> */}
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz/registration" element={<RegistrationForm type="registration"/>} />
        <Route exact path="/quiz/start" element={state.detail?<Quiz />:<Navigate to="/quiz/registration"/>} /> */}
        {/* <Route path="/leaderboard" element={<LeaderBoard />} /> */}
        {/* <Route path="/helpCenter" element={<HelpCenter />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;