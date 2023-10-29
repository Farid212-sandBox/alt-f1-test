import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const CardBody = ({ title, text, ...props }) => {
  return (
    <div {...props}>
      <Card.Title>{title}</Card.Title>
      <Card.Text style={{ lineHeight: "normal" }}>
        {text.length > 200 ? `${text.substring(0, 200)}...` : text}
      </Card.Text>
    </div>
  );
};

CardBody.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default CardBody;
