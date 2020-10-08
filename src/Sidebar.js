import {
  faComments,
  faFlag,
  faLaptopMedical,
  faPlayCircle,
  faSearchDollar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { StateContext } from "./StateContext";

function Sidebar() {
  let { user } = useContext(StateContext);

  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow
        title="COVID-19 information center"
        Icon={<FontAwesomeIcon icon={faLaptopMedical} size={"lg"} />}
      />
      <SidebarRow
        title="Pages"
        Icon={<FontAwesomeIcon icon={faFlag} size={"lg"} />}
      />
      <SidebarRow
        title="Friends"
        Icon={<FontAwesomeIcon icon={faUsers} size={"lg"} />}
      />
      <SidebarRow
        title="Messenger"
        Icon={<FontAwesomeIcon icon={faComments} size={"lg"} />}
      />
      <SidebarRow
        title="Market Place"
        Icon={<FontAwesomeIcon icon={faSearchDollar} size={"lg"} />}
      />
      <SidebarRow
        title="Videos"
        Icon={<FontAwesomeIcon icon={faPlayCircle} size={"lg"} />}
      />
    </div>
  );
}

export default Sidebar;
