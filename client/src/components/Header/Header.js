import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { PiSignOutBold } from "react-icons/pi";
import { AuthContext } from "../../context/AuthContext";

import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>

      {(user != null) & (location.pathname != "/") ? (
        <nav>
          <ul className="home-ul">
            {user.role === "Mentor" ? (
              <li>
                <a href="/">Messages</a>
                <a href="/MentorRegistration">Profile</a>
                <a href="/">
                  Signout <PiSignOutBold />
                </a>
              </li>
            ) : (
              <li>
                <a href="/">Messages</a>
                <a href="/">Mentors</a>
                <a href="/">
                  Signout <PiSignOutBold />
                </a>
              </li>
            )}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
