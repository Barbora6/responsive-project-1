import { Box } from "@mui/material";

export const Sidebar = () => {
  return (
    <Box
      bgcolor="yellow"
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
      Sidebar
    </Box>
  );
};
