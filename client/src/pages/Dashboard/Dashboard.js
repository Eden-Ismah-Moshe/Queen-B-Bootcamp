import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        {user.role === "Mentor" ? (
          <div>
            <h2 className="dashboard-title">
              Welcome to your dashboard, where you <br /> can manage your
              mentorship details, <br />
              connect with mentees through messages.
            </h2>
            <div className="dashboard-buttons">
              <button onClick={() => navigate("/MentorRegistration")}>
                Edit your profile
              </button>
              <button onClick={() => navigate("/")}>View your messages</button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="dashboard-title">
              Explore available mentorship opportunities, <br /> connect with
              mentors, and view your <br /> messages all in one place.
            </h2>
            <div className="dashboard-buttons">
              <button onClick={() => navigate("/viewAllMentors")}>
                View All The Mentors
              </button>
              <button onClick={() => navigate("/")}>View your messages</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
