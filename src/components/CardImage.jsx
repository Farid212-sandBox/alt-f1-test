import PropTypes from "prop-types";
import IconBtn from "./IconBtn";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { CardMedia, Box, Typography } from "@mui/material";

const CardImage = ({ image, price, title, ...props }) => {
  return (
    <Box {...props}>
      <IconBtn icon={faRotate} style={{ position: "absolute" }} />
      <CardMedia sx={{ height: 240 }} image={image} title={title} />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Typography
          sx={{
            padding: "15px",
            backgroundColor: "#1ab394",
            color: "white",
            width: "auto",
            position: "absolute",
            right: 0,
            top: -55,
          }}
        >
          {new Intl.NumberFormat("be-BE", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
          }).format(price)}
        </Typography>
      </Box>
    </Box>
  );
};

CardImage.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default CardImage;
