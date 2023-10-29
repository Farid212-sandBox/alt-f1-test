import PropTypes from "prop-types";
import { Card as BCard } from "react-bootstrap/";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Card = ({ data, ...props }) => {
  return (
    <BCard {...props}>
      <CardImage image={data.picture} price={data.price} />
      <BCard.Body>
        <CardHeader
          data={{
            category: data.category,
            date: data.date,
            full_address: data.full_address,
            m_2: data.m_2,
          }}
        />
        <CardBody title={data.title} text={data.description} />
        <CardFooter url={data.url} />
      </BCard.Body>
    </BCard>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
