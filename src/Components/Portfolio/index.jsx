import Box from "@mui/material/Box";

const Portfolio = () => {
  return (
    <Box
      sx={{
        display: "flex",
        m: 1,
        p: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      {"I'm a flexbox container that uses inline-flex!"}
    </Box>
  );
};

export default Portfolio;
