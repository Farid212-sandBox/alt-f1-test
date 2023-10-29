import PropTyes from "prop-types";
import { Card } from "react-bootstrap";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import IconBtn from "./IconBtn";

const CardImage = ({ image, price, ...props }) => {
  const styles = {
    icon: {
      position: "absolute",
    },
    image: {
      height: "200px",
    },
    price: {
      position: "absolute",
      right: "7%",
      bottom: "58%",
      height: "40px",
      padding: "15px",
      backgroundColor: "#1ab394",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={{ padding: "1rem" }}>
      <IconBtn icon={faRotate} style={styles.icon} />

      <Card.Img
        style={styles.image}
        src={image}
        alt={image.substring(0, 20)}
        {...props}
      />
      <div style={styles.price}>
        {new Intl.NumberFormat("be-BE", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
        }).format(price)}
      </div>
    </div>
  );
};

CardImage.propTypes = {
  image: PropTyes.string,
  price: PropTyes.number,
};

export default CardImage;
