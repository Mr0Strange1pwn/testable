import React, { useState, useRef } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import {
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Grid,
  Modal,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import {
  Menu,
  MenuOpen,
  AccountCircle,
  AttachMoney,
  ArrowDropDown,
  ArrowDropUp,
} from "@material-ui/icons";
import { AiOutlineLogout } from "react-icons/ai";

import { useStyles } from "./styles";
import NavBar from "./NavBar";
import Navigations from "../Routes/Navigations";
import Footer from "./Footer";

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  // const dispatch = useDispatch();
  const location = useLocation();
  const anchorRef = useRef(null);
  const [menustate, setmenuState] = useState(false);
  const [showmodel, setshowmodel] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    // dispatch(logout());
    localStorage.removeItem("userData");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Header Bar ...........  */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: menustate,
        })}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <Menu
                className={clsx(classes.menuButton, {
                  [classes.hide]: menustate,
                })}
                onClick={() => setmenuState(true)}
              />
            </Grid>
          </Grid>

          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Typography style={{ color: "white" }}>section 1</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "white" }}>section 2</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "white" }}>section 3</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "white" }}>section 4</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "white" }}>section 5</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Left Drawer & Nav Bar ..............  */}

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawermenustate]: menustate,
          [classes.drawerClose]: !menustate,
        })}
        classes={{
          paper: clsx({
            [classes.drawermenustate]: menustate,
            [classes.drawerClose]: !menustate,
          }),
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={() => setmenuState(false)}>
            {theme.direction === "rtl" ? null : (
              <MenuOpen style={{ color: "#8a8fa7" }} />
            )}
          </IconButton>
        </div>
        <Divider />

        <NavBar onSelectItem={() => setmenuState(false)} />
      </Drawer>

      {/* pages ............ */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* {location.pathname.length > 2 ? (
          <Typography paragraph>{location.pathname}</Typography>
        ) : (
          <Typography paragraph>/dashboard</Typography>
        )} */}

        <Navigations />
        <div className={classes.toolbar} />
      </main>

      {/* Footer */}
      {/*  */}

      {/* model */}
      <Modal
        open={showmodel}
        onClose={() => setshowmodel(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div className={classes.model}>
          <h2 id="simple-modal-title" className={classes.modelHead}>
            Logout this session
          </h2>
          <Divider />
          <p id="simple-modal-description" className={classes.modelPara}>
            Hi username. are you sure you want to logout
          </p>
          <Grid container>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                style={{ marginRight: "10px", backgroundColor: "#40acfb" }}
                color="primary"
                onClick={() => handleLogout()}>
                logout
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "#6c757d" }}
                color="primary"
                onClick={() => setshowmodel(false)}>
                NO
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}
