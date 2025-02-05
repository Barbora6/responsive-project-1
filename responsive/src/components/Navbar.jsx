// https://www.youtube.com/watch?v=fzxEECHnsvU&t=383s

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import { MdOutlinePets } from "react-icons/md";
import Mail from "@mui/icons-material/Mail";
import { NotificationAdd } from "@mui/icons-material";
import image1 from "../img/stažený soubor.jpg";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "25%"
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" }
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <MdOutlinePets
          fontSize={36}
          sx={{
            display: { xs: "block", sm: "none", md: "none", lg: "none" }
          }}
        />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navigace
        </Typography>

        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationAdd />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={image1}
            onClick={(e) => setOpen(true)}
          />
        </IconsContainer>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src={image1} />
          <Typography variant="span">Barbora</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
