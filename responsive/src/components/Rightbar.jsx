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
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block"
        }
      }}
    >
      Rightbar
    </Box>
  );
};
