import PropTypes from "prop-types";
import { Typography, CardContent } from "@mui/material";
import CardHeader from "./CardHeader";

const CardBody = ({ data, ...props }) => {
  return (
    <CardContent {...props}>
      <CardHeader data={data} />
      <Typography gutterBottom variant="h5" component="div">
        {data.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`${data.description.substring(0, 200)}...`}
      </Typography>
    </CardContent>
  );
};

CardBody.propTypes = {
  data: PropTypes.object,
};

export default CardBody;
