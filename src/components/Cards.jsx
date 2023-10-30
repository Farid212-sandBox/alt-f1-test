import PropTypes from "prop-types";
import { Box, Card, CardActions } from "@mui/material";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const MediaCard = ({ data, ...props }) => {
  console.log(data);
  return (
    <Card {...props} elevation={2}>
      <Box>
        <CardImage image={data.picture} price={data.price} title={data.id} />

        <CardBody data={data} />
        <CardActions>
          <CardFooter url={data.url} />
        </CardActions>
      </Box>
    </Card>
  );
};

MediaCard.propTypes = {
  data: PropTypes.object,
};

export default MediaCard;
