import {
  faAngleDown,
  faBell,
  faChartLine,
  faComments,
  faFlag,
  faHome,
  faLayerGroup,
  faObjectGroup,
  faSearch,
  faSearchDollar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import "./Header.css";
import { StateContext } from "./StateContext";

function Header() {
  let { state } = useContext(StateContext);

  return (
    <div className="header">
      <div className="left">
        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=40&h=40" alt="facebook-logo" />
        <div className="input-div">
          <FontAwesomeIcon icon={faSearch} />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="center">
        <FontAwesomeIcon className="active" size={"lg"} icon={faHome} />
        <FontAwesomeIcon size={"lg"} icon={faFlag} />
        <FontAwesomeIcon size={"lg"} icon={faLayerGroup} />
        <FontAwesomeIcon size={"lg"} icon={faSearchDollar} />
        <FontAwesomeIcon size={"lg"} icon={faUsers} />
      </div>
      <div className="right">
        <div className="user">
          <img src={state.user.photoURL} alt="avatar" />
          <div className="username">{state.user.displayName}</div>
        </div>
        <FontAwesomeIcon icon={faComments} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}

export default Header;
