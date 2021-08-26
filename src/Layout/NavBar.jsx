import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Dashboard, AccountCircle, Search } from "@material-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { RiUserSearchFill } from "react-icons/ri";
import { useStyles } from "./styles";

const Paths = [
  {
    title: "Side 1",
    icon: <Dashboard />,
    path: "/",
  },
  {
    title: "Side 2",
    icon: <Dashboard />,
    path: "/yearly-insights",
  },
  {
    title: "Side 3",
    icon: <Dashboard />,
    path: "/company-search",
  },
  {
    title: "Side 4",
    icon: <Dashboard />,
    path: "/saved-searches",
  },
];

export default function NavBar() {
  const History = useHistory();
  const Location = useLocation();
  const classess = useStyles();
  const [activePath, setActivePath] = useState("/");

  return (
    <List>
      {Paths.map((path, index) => {
        return (
          <ListItem
            button
            className={Location.pathname === path.path ? classess.active : null}
            key={index}
            onClick={() => {
              setActivePath(path.path);
              History.push(path.path);
            }}>
            <ListItemIcon
              className={
                Location.pathname === path.path
                  ? classess.active
                  : classess.icon
              }>
              {path.icon}
            </ListItemIcon>
            <ListItemText primary={path.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
