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
          sm: "block",
          md: "900px",
          lg: "1200px",
          xl: "1600px"
        }
      }}
    >
      Sidebar
    </Box>
  );
};
