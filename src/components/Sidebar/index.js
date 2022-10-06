import React from "react";
import { Link } from "react-router-dom";
import youtube from "../../youtube";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  MdHome,
  MdHistory,
  MdSubscriptions,
  MdUpdate,
  MdFavorite,
  MdSettings,
} from "react-icons/md";
import { GoogleLogout } from "react-google-login";

export default function Lastvideos() {
  const onSearch = async (keyword) => {
    const response = await youtube.get("/search", {
      params: {
        q: keyword,
      },
    });

    console.log(response.data);
  };

  const navigate = useNavigate();

  function onFailure(response) {
    console.log("SUCCESSED", response);
    // console.log(response.profileObj);
    navigate("/");
    return;
  }
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <MdHome size={22} />
          <Link to="/lastvideo">Home</Link>
        </li>
        <li>
          <MdHistory size={22} />
          History
        </li>
        <li>
          <MdSubscriptions size={22} />
          Subscriptions
        </li>
        <li>
          <MdUpdate size={22} />
          To watch after
        </li>
        <li>
          <MdFavorite size={22} />
          Videos "i like"
        </li>
        <li>
          {/* <MdSettings size={22} />
          Logout */}
          <GoogleLogout
            clientId="423778706232-cb737upob0v31h4is24dcc561eh5fuju.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={onFailure}
          ></GoogleLogout>
        </li>
      </ul>
    </div>
  );
}
