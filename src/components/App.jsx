import Cards from "./Cards";
import data from "../data/response.json";
import { Grid, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box>
      <Typography
        textAlign={"center"}
        mt={5}
        mb={3}
        sx={{
          fontSize: { xs: "2.75rem", md: "5rem" },
          fontWeight: { xs: 400, md: 700 },
          textTransform: "uppercase",
        }}
      >
        test alt-f1
      </Typography>
      <Grid container spacing={2}>
        {data.map((el, i) => (
          <Grid item key={i} xs={12} sm={6} md={3}>
            <Cards data={el} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
