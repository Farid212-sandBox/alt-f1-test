import PropTypes from "prop-types";
import { Grid, Box, Typography } from "@mui/material";

const CardHeader = ({ data, ...props }) => {
  const { category, date, full_address, m_2 } = data;
  return (
    <Box
      style={{
        fontSize: "10px",
        color: "gray",
      }}
      {...props}
    >
      <Box display={"flex"}>
        <Grid item xs={8}>
          <Typography variant="caption">{category}</Typography>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "end" }}>
          <Typography variant="caption">{date}</Typography>
        </Grid>
      </Box>
      <Box display={"flex"}>
        <Grid item xs={8}>
          <Typography variant="caption">{full_address}</Typography>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "end" }}>
          <Typography variant="caption">{m_2 ? m_2 : "?"} m²</Typography>
        </Grid>
      </Box>
    </Box>
  );
};

CardHeader.propTypes = {
  data: PropTypes.object,
};

export default CardHeader;
