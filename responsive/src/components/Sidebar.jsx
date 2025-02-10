import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch
} from "@mui/material";

import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaStore } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";

export const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      bgcolor="F5F5F5"
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block"
        }
      }}
    >
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <IoHomeSharp size={28} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <CgWebsite size={28} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <MdGroups size={28} />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <FaStore size={28} />
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <IoPerson size={28} />
              </ListItemIcon>
              <ListItemText primary="Fiends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <IoMdSettings size={28} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <CgProfile size={28} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <FaMoon size={28} />
              </ListItemIcon>
              <Switch
                defaultChecked
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
