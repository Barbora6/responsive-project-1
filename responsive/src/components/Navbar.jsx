import { AppBar, styled, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">Navigace</Typography>
      </StyledToolbar>
    </AppBar>
  );
};
