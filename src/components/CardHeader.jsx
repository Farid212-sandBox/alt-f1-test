import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const CardHeader = ({ data, ...props }) => {
  const { category, date, full_address, m_2 } = data;
  return (
    <div
      style={{
        fontSize: "10px",
        color: "gray",
      }}
      {...props}
    >
      <Row>
        <Col md={8}>{category}</Col>
        <Col md={4} style={{ textAlign: "end" }}>
          {date}
        </Col>
      </Row>
      <Row>
        <Col xs={8}>{full_address}</Col>
        <Col xs={4} style={{ textAlign: "end" }}>
          {m_2 ? m_2 : "?"} m²
        </Col>
      </Row>
    </div>
  );
};

CardHeader.propTypes = {
  data: PropTypes.object,
};

export default CardHeader;
