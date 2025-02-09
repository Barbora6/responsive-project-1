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
import Mail from "@mui/icons-material/Mail";
import { NotificationAdd } from "@mui/icons-material";
import { GiTechnoHeart } from "react-icons/gi";
import image1 from "../img/stažený soubor.jpg";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
  marginLeft: "5"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "25%"
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  width: "10%",
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
        <GiTechnoHeart
          fontSize={36}
          sx={{
            display: { xs: "block", sm: "none", md: "none", lg: "none" }
          }}
        />
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          BaraCook
        </Typography>

        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <Mail sx={{ width: 30, height: 30 }} />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationAdd sx={{ width: 30, height: 30 }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={image1}
            onClick={(e) => setOpen(true)}
          />
        </IconsContainer>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src={image1} />
          <Typography variant="span">BS</Typography>
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
