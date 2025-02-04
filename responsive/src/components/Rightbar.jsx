import { Box } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="pink"
      flex={2}
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
      Rightbar
    </Box>
  );
};
